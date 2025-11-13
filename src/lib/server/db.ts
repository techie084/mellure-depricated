import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

let db: ReturnType<typeof drizzle>;

const sql = neon(env.DATABASE_URL);
// eslint-disable-next-line prefer-const
db = drizzle({ client: sql, schema });
console.log('✅ Database connected successfully');

// try {
// 	const sql = neon(env.DATABASE_URL);
// 	db = drizzle({ client: sql, schema });
// 	console.log('✅ Database connected successfully');
// } catch (error) {
// 	console.error('❌ Failed to connect to database:', error);
// 	throw error;
// }

export { db };
