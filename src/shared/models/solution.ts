import { BaseModel } from './base-model';
import { User } from './user';

export interface Solution  extends BaseModel {
  title: string;
  description: string;
  links: string[];

  user: User; // quem submeteu a solução
  rewardWins: string; // recompensa que ele ganhou
  pointsWins: number; // pontos que ele ganhou
  team: User[]; // tem que ser ser um usuário


  // createAt - data que está sendo submetida
}