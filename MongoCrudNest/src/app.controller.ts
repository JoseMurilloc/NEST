import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IRequest } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IRequest {
    return this.appService.getHello();
  }
}
