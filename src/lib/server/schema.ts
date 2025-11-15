import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';
// import { sql } from 'drizzle-orm';

// export const products = pgTable('products', {
// 	id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
// 	name: text('name').notNull(),
// 	description: text('description'),
// 	price: real('price').notNull(),
// 	category: text('category').notNull(),
// 	brand: text('brand'),
// 	stock: integer('stock').notNull().default(0),
// 	imageUrl: text('image_url'),
// 	rating: real('rating').default(0)
// createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
// updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`)
// });

export const users = pgTable('users', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
	name: varchar('name', { length: 225 }).notNull(),
	email: varchar('email', { length: 225 }).notNull().unique()
	// emailVerified: integer('email_verified'),
	// createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
	// updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`)
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
// export type Product = typeof products.$inferSelect;
// export type NewProduct = typeof products.$inferInsert;
