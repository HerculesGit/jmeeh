// mock

import { Constants } from "../constants/constants";
import { Role } from "../enums/role";
import { Challenge } from "../models/challenge";
import { Solution } from '../models/solution';
import { User } from '../models/user';

export class Database {
  challenges: Challenge[] = [];
  solutions: Solution[] = []
  users: User[];

  constructor() {
    this.getAllSolutions().then(sols => this.solutions = sols);
    this.challenges = this.getAllChallenges();
  }

  getAllChallenges() {
    this.challenges = JSON.parse(localStorage.getItem(Constants.CHALLENGES));
    return this.challenges;
  }

  async submitSolution(solution: Solution, hacktonId: any): Promise<Solution> {

    solution.id = Date.now();
    const index = this.findChallengeIndex(hacktonId);
    if (this.challenges[index].participants === null ||
      this.challenges[index].participants === undefined) {
      this.challenges[index].participants = [];
    }
    this.challenges[index].participants.push(solution.user);
    this.challenges[index].submissions.push(solution);

    this.solutions.push(solution);
    this.updateChallengs();
    this.updateSolutions();


    return solution;
  }

  /// Challenge C R U D
  async addChallenge(challenge: Challenge): Promise<Challenge> {
    challenge.id = Date.now();
    this.challenges.push(challenge);
    console.log(' => ')
    this.saveInLocalStorage(Constants.CHALLENGES, this.challenges);
    return challenge;
  }

  async getChallengeById(hacktonId: number): Promise<Challenge> {
    const index = this.findChallengeIndex(hacktonId);
    console.log('indexass' + index)
    return this.challenges[index];
  }

  private updateChallengs() {
    localStorage.setItem('challenges', JSON.stringify(this.challenges));
    this.challenges = JSON.parse(localStorage.getItem('challenges'));
  }

  // Solutions C R U D
  private async updateSolutions() {
    const tempSolutions: Solution[] = [];
    this.solutions.forEach(sol => tempSolutions.push(sol));

    this.solutions = await this.getInLocalStorage(Constants.SOLUTIONS);
    this.solutions.forEach(sol => {
      if (tempSolutions.indexOf(sol) < 0) {
        tempSolutions.push(sol);
      }
    });

    this.saveInLocalStorage(Constants.SOLUTIONS, tempSolutions);
    this.solutions = await this.getInLocalStorage(Constants.SOLUTIONS);
  }

  getAllSolutionsByChallenge(hacktonId: any): Solution[] {
    const index = this.findChallengeIndex(hacktonId);
    return this.challenges[index].submissions;
  }

  async getAllSolutionByUserId(userId: number): Promise<Solution[]> {
    return this.getAllSolutions();
  }

  async getAllSolutions(): Promise<Solution[]> {
    return await JSON.parse(localStorage.getItem('solutions'));;
  }

  getOneSolution(hacktonId: any, solutionId: any): Solution {
    const index = this.findChallengeIndex(hacktonId);
    const solutionIndex = this.challenges[index].submissions.findIndex(s => s.id == solutionId);
    return this.challenges[index].submissions[solutionIndex];
  }


  private findChallengeIndex(hacktonId): number {
    const index = this.challenges.findIndex((challenge) => challenge.id == hacktonId);
    return index
  }

  /// USER C R U D 
  async registerUser(user: User): Promise<User> {
    user.id = Date.now();
    user.createdAt = new Date();
    user.updateAt = new Date();

    const key = (user.role == Role.creator) ? Constants.USER_CREATOR : Constants.USER;
    console.log(user)
    this.saveInLocalStorage(key, user);
    return user;
  }

  async getCurrentUser(): Promise<User> {
    const user = this.getInLocalStorage(Constants.USER);
    return user;
  }


  /// 
  private async saveInLocalStorage(key: string, value: any): Promise<void> {
    console.log('save', key)
    await localStorage.setItem(key, JSON.stringify(value));
  }

  private async getInLocalStorage(key: string): Promise<any> {
    return await JSON.parse(localStorage.getItem(key));;
  }

}