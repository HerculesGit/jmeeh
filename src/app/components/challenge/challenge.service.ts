import { Injectable } from '@angular/core';
import { Database } from 'src/shared/database/database';
import { Challenge } from 'src/shared/models/challenge';
import { User } from 'src/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challeges: Challenge[] = [];
  database: Database = new Database();

  constructor() {
    this.challeges = this.database.getAllChallenges();
  }

  addHackaton(challenge: Challenge) {
    this.database.addChallenge(challenge);
  }

  submitSolution(user: User, hacktonId: any) {
    this.database.submitSolution(user, hacktonId);
  }

  getHackton(hacktonId: any): Challenge {
    const index = this.challeges.findIndex(c => c.id == hacktonId);
    console.log(hacktonId, index)
    return this.challeges[index];
  }

}
