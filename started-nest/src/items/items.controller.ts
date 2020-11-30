import { ItemInterface } from './interfaces/ItensInterface';
import { ItemsService } from './items.service';
import { CreateItemsDto } from './dtos/CreateItemsDto';
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
import { Response } from 'express';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async index(): Promise<ItemInterface[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id): Promise<ItemInterface> {
    return await this.itemsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id, @Res() response: Response): Response {
    return response.json({
      id,
    });
  }

  @Put(':id')
  update(@Body() body: CreateItemsDto, @Param('id') id): Object {
    return {
      body,
      id,
    };
  }

  @Post()
  create(@Body() body: CreateItemsDto): Object {
    return {
      post: {
        name: body.name,
        description: body.description,
        mount: body.mount,
      },
    };
  }
}
