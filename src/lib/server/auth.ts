import { betterAuth } from 'better-auth';
// import * as schema from './schema';
// import { drizzleAdapter } from 'better-auth/adapters/drizzle';
// import { db } from './db';
import { BETTER_AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

const _auth = betterAuth({
	emailAndPassword: {
		enabled: true
	},
	socialProviders: {
		google: {
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		}
	},
	secret: BETTER_AUTH_SECRET
	// database: drizzleAdapter(db, {
	// 	provider: 'sqlite',
	// 	schema: schema
	// })
});

export const auth = _auth;
