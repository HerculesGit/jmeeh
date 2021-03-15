import { Role } from "../enums/role";
import { BaseModel } from "./base-model";
import { Company } from "./company";
import { EducationalInstitution } from "./educational-institution";
export interface User extends BaseModel {
  name: string,
  role: Role,
  image?: string,

  company?: Company,
  educationalIntitutional?: EducationalInstitution,
}