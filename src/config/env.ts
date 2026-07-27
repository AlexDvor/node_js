import 'dotenv/config';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error('DATABASE_URL is required');
}

export const env = {
	APP_PORT: Number(process.env.APP_PORT) || 3000,
	DATABASE_URL: databaseUrl,
	NODE_ENV: process.env.NODE_ENV ?? 'development',
} as const;
