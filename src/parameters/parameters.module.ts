import { Module } from '@nestjs/common';
import { ParametersService } from './services/parameters.service';
import { ParametersController } from './controllers/parameters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parameter } from './entities/parameter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parameter])],
  controllers: [ParametersController],
  providers: [ParametersService],
})
export class ParametersModule {}
