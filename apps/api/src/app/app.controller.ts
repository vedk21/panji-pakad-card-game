import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  test() {
    const testMessage = this.appService.getTestingData();
    return { message: 'Success', result: testMessage };
  }
}
