import { Injectable } from "@angular/core";
import { Database } from "src/shared/database/database";
import { Challenge } from "src/shared/models/challenge";

@Injectable({
  providedIn: 'root'
})
export class ChallengesRespository {
  constructor() {

  }

  static async createChallenge(challenge: Challenge): Promise<Challenge> {
    return new Database().addChallenge(challenge);
  }

  static async getAllHackathon(): Promise<Challenge[]> {
    return new Database().getAllChallenges();
  }

  static async getHacktonById(hackathonId: number): Promise<Challenge> {
    return await new Database().getChallengeById(hackathonId);
  }
}