import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { Database } from 'src/shared/database/database';
import { Challenge } from 'src/shared/models/challenge';
import { User } from 'src/shared/models/user';
import { ChallengesRespository } from './challenge-repository';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challeges: Challenge[] = [];
  database: Database = new Database();

  constructor(private http: HttpClient) {
    this.challeges = this.database.getAllChallenges();
  }

  async getAllHackathon(): Promise<Challenge[]> {
    // const challenges: any = await this.http.get(AppConstants.CHALLENGES).toPromise();
    const challenges = await ChallengesRespository.getAllHackathon();
    return challenges;
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