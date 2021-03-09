import { Injectable } from '@angular/core';
import { Solution } from 'src/shared/models/solution';
import { SolutionRepository } from './solution-repository';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor() { }

  async getOneSolution(hacktonId: any, solutionId: any): Promise<Solution> {
    return SolutionRepository.getOneSolution(hacktonId, solutionId);
  }

  async submitSolution(solution: Solution, hacktonId: any): Promise<Solution> {
    return SolutionRepository.submitSolution(solution, hacktonId);
  }
}
