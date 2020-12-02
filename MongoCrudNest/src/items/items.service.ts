import { CreateItemsDto } from './dtos/CreateItemsDto';
import { ItemInterface } from './interfaces/ItensInterface';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly items: Model<ItemInterface>,
  ) {}

  async findAll(): Promise<ItemInterface[]> {
    return await this.items.find();
  }

  async delete(id: string): Promise<ItemInterface> {
    return await this.items.findByIdAndRemove(id);
  }

  async update(id: string, item: CreateItemsDto): Promise<ItemInterface> {
    return await this.items.findByIdAndUpdate(id, item, { new: true });
  }

  async findOne(id: string): Promise<ItemInterface> {
    return await this.items.findOne({ _id: id });
  }

  async create(data: CreateItemsDto): Promise<ItemInterface> {
    return await this.items.create(data);
  }
}
