import { Injectable } from '@angular/core';
import { User } from 'src/shared/models/user';
import { ChallengeService } from '../challenge/challenge.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(
    private challengeService: ChallengeService
  ) { }

  submitSolution(user: User, hacktonId: any) {
    this.challengeService.submitSolution(user, hacktonId);
  }




}
