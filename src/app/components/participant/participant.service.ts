import { Injectable } from '@angular/core';
import { Solution } from 'src/shared/models/solution';
import { User } from 'src/shared/models/user';
import { ChallengeService } from '../challenge/challenge.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(
    private challengeService: ChallengeService
  ) { }

  async submitSolution(solution: Solution, hacktonId: any): Promise<Solution> {
    return await this.challengeService.submitSolution(solution, hacktonId);
  }




}
