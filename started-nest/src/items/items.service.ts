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

  async findOne(id: string): Promise<ItemInterface> {
    return await this.items.findOne({ _id: id });
  }
}
