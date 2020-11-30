import { Injectable } from '@nestjs/common';

export interface IRequest {
  message: string;
}

@Injectable()
export class AppService {
  getHello(): IRequest {
    return { message: 'Hello World!' };
  }
}
