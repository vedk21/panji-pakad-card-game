import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTestingData() {
    return { test: 'Welcome to api!' };
  }
}
