import { Controller, Get , Param} from '@nestjs/common';
import { TestService } from './test.service';

@Controller('/test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('check-connection')
  async checkConnection(): Promise<string> {
    return this.testService.checkConnection();
  }
}

