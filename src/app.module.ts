import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './config/enviroments';
import * as Joi from 'joi';

import config from './config/config';
import { envValidator } from './config/env.validator';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { OfficesModule } from './offices/offices.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { CustomersModule } from './customers/customers.module';
import { ProvidersModule } from './providers/providers.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object(envValidator),
    }),
    UsersModule,
    DatabaseModule,
    AuthModule,
    CompaniesModule,
    OfficesModule,
    WarehouseModule,
    CustomersModule,
    ProvidersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
