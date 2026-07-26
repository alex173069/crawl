import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [AuthModule, StripeModule],
})
export class EndpointsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //TODO: APPLY RATE LIMITS
  }
}
