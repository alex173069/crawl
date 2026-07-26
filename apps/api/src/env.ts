export type Environment = {
  NODE_ENV: 'development' | 'production';
  API_URL: string;
  API_PORT: string;
  DATABASE_URL: string;
  DATABASE_READ_URL: string;
  DATABASE_WRITE_URL: string;
  REDIS_URL: string;
  STRIPE_API_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  WEB_APP_URL: string;
};

export const getEnv = <K extends keyof Environment>(
  key: K,
  fallback?: Environment[K],
): Environment[K] => {
  const value = process.env[key] as Environment[K] | undefined;

  if (value === undefined) {
    // handle empty string fallback
    if (fallback === '') {
      return fallback;
    }
    if (fallback) {
      return fallback;
    }
    throw new Error(`Missing environment variable: ${key}.`);
  }

  return value;
};
