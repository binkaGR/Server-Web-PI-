import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Articles } from './article.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("dd")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('Getjson')
  getJson1(): Promise<Articles[]>
  {
    return this.appService.getJson();
  }

}
