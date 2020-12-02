import { User } from './../entities/UserModel';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
// import UserDtos from './dtos/UserDtos';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Get()
  async index(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @Get(':id')
  async show(@Param() id: string): Promise<User> {
    return await this.userRepository.findOneOrFail(id);
  }

  @Post()
  async store(@Body() body: User): Promise<User> {
    const user = this.userRepository.create(body);
    return await this.userRepository.save(user);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() body: User): Promise<User> {
    await this.userRepository.findOneOrFail(id);
    await this.userRepository.update(id, body);
    return await this.userRepository.findOneOrFail(id);
  }

  @Delete(':id')
  async delete(
    @Param() id: string,
    @Res() response: Response,
  ): Promise<Response> {
    await this.userRepository.delete(id);
    return response.json();
  }
}
