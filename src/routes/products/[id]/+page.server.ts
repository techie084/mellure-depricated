import type { ServerLoad } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const product = await db
		.select()
		.from(products)
		.where(eq(products.id, parseInt(params.id)))
		.get();

	if (!product) {
		throw error(404, 'Product not found');
	}

	return {
		product
	};
};
