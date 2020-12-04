import { ItemsModule } from './items/items.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
