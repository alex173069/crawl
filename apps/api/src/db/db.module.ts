import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createDb } from '@crawl/db/client';

export const DRIZZLE = Symbol('DRIZZLE');

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      useFactory: (config: ConfigService) =>
        createDb(config.getOrThrow('db.dbUrl')),
      inject: [ConfigService],
    },
  ],
  exports: [DRIZZLE],
})
export class DbModule {}
