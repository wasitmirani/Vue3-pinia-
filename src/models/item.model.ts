import { v4 as uuidv4 } from "uuid";

export interface Item {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  createdAt: Date;
  deletedAt?: Date;
}

export function generateFakeData(): Item {
  return {
    id: uuidv4(),
    quantity: Math.random(),
    name: "Test "+Math.random(),
    description:"ABc "+Math.random(),
    createdAt: new Date(),
  };
}