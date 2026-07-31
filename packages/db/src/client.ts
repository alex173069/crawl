import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const createDb = (connectionString: string) =>
  drizzle({ client: new Pool({ connectionString }) });
