export type AppConfig = {
  env: {
    type: 'production' | 'development';
  };
  api: {
    port: number;
    path: string;
    url: string;
  };
  db: {
    dbUrl: string;
    readUrl: string;
    writeUrl: string;
    redisUrl: string;
  };
  stripe: {
    apiKey: string;
    webhookSecret: string;
  };
  app: {
    baseUrl: string;
  };
};
