import { integer, varchar, pgEnum, pgTable as table } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { db } from './db';

export const roles = pgEnum('roles', ['guest', 'user', 'admin']);

export const usersTable = table('users', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
	name: varchar('name', { length: 225 }).notNull(),
	email: varchar('email', { length: 225 }).notNull().unique(),
	emailVerified: integer('email_verified')
	// role: rolesEnum().default('guest')
	// createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
	// updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`)
});

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

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;

// export type Product = typeof products.$inferSelect;
// export type NewProduct = typeof products.$inferInsert;
