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
} from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async index(): Promise<ItemInterface[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<ItemInterface> {
    return await this.itemsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ItemInterface> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() body: CreateItemsDto,
    @Param('id') id: string,
  ): Promise<ItemInterface> {
    return this.itemsService.update(id, body);
  }

  @Post()
  async create(@Body() body: CreateItemsDto): Promise<ItemInterface> {
    return this.itemsService.create(body);
  }
}
