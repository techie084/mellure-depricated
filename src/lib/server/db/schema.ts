// import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
// import { sql } from 'drizzle-orm';

// export const products = sqliteTable('products', {
// 	id: integer('id').primaryKey({ autoIncrement: true }),
// 	name: text('name').notNull(),
// 	description: text('description'),
// 	price: real('price').notNull(),
// 	category: text('category').notNull(),
// 	brand: text('brand'),
// 	stock: integer('stock').notNull().default(0),
// 	imageUrl: text('image_url'),
// 	rating: real('rating').default(0),
// 	createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
// 	updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`)
// });

// export type Product = typeof products.$inferSelect;
// export type NewProduct = typeof products.$inferInsert;
