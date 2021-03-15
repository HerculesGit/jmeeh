import { BaseModel } from "./base-model";

export interface Address extends BaseModel {
  state: string,
  city: string
}