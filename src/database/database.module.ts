import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService<ConfigType<typeof config>>) => {
        const dbConfig = configService.get('database');
        const options: PostgresConnectionOptions = {
          type: 'postgres',
          host: '192.168.200.206', //dbConfig.host,
          port: 5432, //dbConfig.port,
          username: 'root', //dbConfig.user,
          password: 'secret1234', //dbConfig.password,
          database: 'posware', //dbConfig.name,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
        };
        return options;
      },
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
