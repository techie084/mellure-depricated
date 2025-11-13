// import type { ServerLoad } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { products } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';
// import type {  page} from ''

export const load = async ({ params }) => {
	const product = await db
		.select()
		.from(products)
		.where(eq(products.id, parseInt(params.id)))
		.getSQL();

	if (!product) {
		throw error(404, 'Product not found');
	}

	return {
		product
	};
};
