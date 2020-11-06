import { AcceptanceCriteria } from './acceptance-criteria';
import { Owner } from './owner';
import { Participant } from './participant';
import { Solution } from './solution';

export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficultyLevel: string;
  reward: string;
  points: number;
  acceptanceCriteria: AcceptanceCriteria[];
  links: string[];
  acceptanceTime: Date;
  images?: string[]
  owner: Owner
  time?: Date,
  participants: Participant[], // acho que isso pode sair! porque nas submissoes diz quem participa
  submissions: Solution[]

}