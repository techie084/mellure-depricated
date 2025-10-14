import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { like, and, gte, lte, eq, or, desc, asc, count } from 'drizzle-orm';
import { productQuerySchema, productSchema } from '$lib/validation/product';
import { handleError, AppError } from '$lib/utils/errors';

export const GET: RequestHandler = async ({ url }) => {
	try {
		// Validate query parameters
		const queryParams = Object.fromEntries(url.searchParams);
		const validatedQuery = productQuerySchema.parse(queryParams);

		const { search, category, minPrice, maxPrice, inStock, sortBy, page, limit } = validatedQuery;

		// Build where conditions
		const conditions = [];

		if (search) {
			conditions.push(
				or(
					like(products.name, `%${search}%`),
					like(products.description, `%${search}%`),
					like(products.brand, `%${search}%`)
				)
			);
		}

		if (category) {
			conditions.push(eq(products.category, category));
		}

		conditions.push(gte(products.price, minPrice));
		conditions.push(lte(products.price, maxPrice));

		if (inStock) {
			conditions.push(gte(products.stock, 1));
		}

		const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

		// Build order by
		let orderBy;
		switch (sortBy) {
			case 'price-asc':
				orderBy = asc(products.price);
				break;
			case 'price-desc':
				orderBy = desc(products.price);
				break;
			case 'rating':
				orderBy = desc(products.rating);
				break;
			default:
				orderBy = asc(products.name);
		}

		// Get total count
		const [{ total }] = await db.select({ total: count() }).from(products).where(whereClause);

		// Get paginated results
		const offset = (page - 1) * limit;
		const result = await db
			.select()
			.from(products)
			.where(whereClause)
			.orderBy(orderBy)
			.limit(limit)
			.offset(offset);

		return json({
			products: result,
			pagination: {
				page,
				limit,
				total,
				totalPages: Math.ceil(total / limit)
			}
		});
	} catch (error) {
		return handleError(error);
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		// Validate input
		const validatedData = productSchema.parse(body);

		// Check if product already exists
		const existing = await db
			.select()
			.from(products)
			.where(eq(products.name, validatedData.name))
			.get();

		if (existing) {
			throw new AppError('Product with this name already exists', 409, 'PRODUCT_EXISTS');
		}

		// Insert product
		const newProduct = await db
			.insert(products)
			.values({
				...validatedData,
				updatedAt: new Date()
			})
			.returning();

		return json({ product: newProduct[0] }, { status: 201 });
	} catch (error) {
		return handleError(error);
	}
};
