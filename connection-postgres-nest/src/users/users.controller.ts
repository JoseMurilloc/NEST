import { User } from './../entities/UserModel';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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
}
