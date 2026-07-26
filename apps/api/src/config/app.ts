import type { AppConfig } from './config.type';
import { getEnv } from '../env';

const loadConfig = (): AppConfig => {
  const env = getEnv('NODE_ENV');
  const apiPort = Number(getEnv('API_PORT', '5555'));
  const apiUrl = getEnv('API_URL', 'http://localhost');
  let portSuffix = '';
  if (process.env.API_PORT && env === 'development') {
    portSuffix = `:${apiPort}`;
  }

  return {
    env: {
      type: env,
    },
    api: {
      port: apiPort,
      path: apiUrl,
      url: `${apiUrl}${portSuffix}/v1`,
    },
    db: {
      dbUrl: getEnv('DATABASE_URL'),
      readUrl: getEnv('DATABASE_READ_URL'),
      writeUrl: getEnv('DATABASE_WRITE_URL'),
      redisUrl: getEnv('REDIS_URL'),
    },
    stripe: {
      apiKey: getEnv('STRIPE_API_KEY'),
      webhookSecret: getEnv('STRIPE_WEBHOOK_SECRET'),
    },
    app: {
      baseUrl: getEnv('WEB_APP_URL', ''), //to add the website url
    },
  };
};

export default loadConfig;
