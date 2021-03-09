import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Challenge } from 'src/shared/models/challenge';
import { Solution } from 'src/shared/models/solution';
import { UserRepository } from 'src/shared/repositories/user-repository';
import { SolutionRepository } from '../solution/solution-repository';
import { ChallengesRespository } from './challenge-repository';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challeges: Challenge[] = [];

  constructor(private http: HttpClient,
    private userRepository: UserRepository) {
  }

  async getAllHackathon(): Promise<Challenge[]> {
    const challenges = await ChallengesRespository.getAllHackathon();
    return challenges;
  }

  async addHackaton(challenge: Challenge) {
    challenge = await ChallengesRespository.createChallenge(challenge);
  }

  async submitSolution(solution: Solution, hacktonId: any): Promise<Solution> {
    return await SolutionRepository.submitSolution(solution, hacktonId);
  }

  async getHackton(hacktonId: any): Promise<Challenge> {
    return await ChallengesRespository.getHacktonById(hacktonId);
  }

  getCurrentUser() {
    return this.userRepository.getCurrentUser();
  }
}