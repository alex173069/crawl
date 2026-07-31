import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'drizzle-kit';
config({
  path: fileURLToPath(
    new URL('../../apps/api/.env.development', import.meta.url),
  ),
});
export default defineConfig({
  dialect: 'postgresql',
  schema: './src/schema/index.ts',
  out: './migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
