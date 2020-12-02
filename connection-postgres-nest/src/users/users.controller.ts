import { Controller, Get } from '@nestjs/common';

interface ResponseObject {
  message: string;
}

@Controller('users')
export class UsersController {
  @Get('/test')
  test(): ResponseObject {
    return {
      message: 'Deu certo',
    };
  }
}
