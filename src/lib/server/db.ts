import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$env/static/private';
import { users } from './schema';

const sql = neon(DATABASE_URL, {});
const db = drizzle(sql);
console.log('✅ Database connected successfully');

const main = async () => {
	const user: typeof users.$inferInsert = {
		name: 'John',
		age: 30,
		email: 'john@example.com'
	};

	await db.insert(users).values(user);
	console.log('New user created!');

	const users = await db.select().from(users);
	console.log('Getting all users from the database: ', users);
	/*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

	await db
		.update(users)
		.set({
			age: 31
		})
		.where(eq(users.email, user.email));
	console.log('User info updated!');

	await db.delete(users).where(eq(users.email, user.email));
	console.log('User deleted!');
};

main();

export { db };
