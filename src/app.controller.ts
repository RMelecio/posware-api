import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApikeyGuard } from './auth/guards/apikey.guard';
import { Public } from './auth/guards/decorator/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(ApikeyGuard)
  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
