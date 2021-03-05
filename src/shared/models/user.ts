import { BaseModel } from "./base-model";

export interface User extends BaseModel {
  name: string,
  role: number,
  image?: string,
}