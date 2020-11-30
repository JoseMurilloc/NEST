import { Document } from 'mongoose';

export interface ItemInterface extends Document {
  id?: string;
  name: string;
  description?: string;
  mount: number;
}
