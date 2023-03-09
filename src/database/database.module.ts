import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, port, name, user, password } = configService.database;
        const options: PostgresConnectionOptions = {
          type: 'postgres',
          host,
          port: +port,
          username: user,
          password,
          database: name,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
        };
        return options;
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
