import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

let db: ReturnType<typeof drizzle>;

try {
	const sqlite = new Database('e-commerce.db');
	db = drizzle(sqlite, { schema });
	console.log('✅ Database connected successfully');
} catch (error) {
	console.error('❌ Failed to connect to database:', error);
	throw error;
}

export { db };
