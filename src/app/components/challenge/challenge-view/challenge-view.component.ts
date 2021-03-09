import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/shared/core/base-components/base-component.component';
import { Challenge } from 'src/shared/models/challenge';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenge-view',
  templateUrl: './challenge-view.component.html',
  styleUrls: ['./challenge-view.component.scss']
})
export class ChallengeViewComponent extends BaseComponent implements OnInit {

  hacktonId: any;
  challenge: Challenge
  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService
  ) {
    super();
  }

  ngOnInit(): void {
    this.hacktonId = this.activatedRoute.snapshot.params.id;
    this.getChallenge();

    super.ngOnInit();
  }

  async getChallenge() {
    try {
      this.challenge = await this.challengeService.getHackton(this.hacktonId);
    } catch (error) {
      console.error(error);
    }
  }

  goToSubmitSolution() {
    this.router.navigate(['submit'], {
      relativeTo: this.activatedRoute,
      queryParams: { id: this.hacktonId },
      queryParamsHandling: "preserve",
    })
  }

  /*
  view/:id/submit
  view/:id/solution/:id
  */
  goToViewSolution(solutionId: any) {
    this.router.navigate([`solution/${solutionId}`], {
      relativeTo: this.activatedRoute,
      queryParams: {
        id: this.hacktonId,
        solutionId: solutionId
      },
      queryParamsHandling: "preserve",
    })
  }

  /**
   * Temp method to limit caracters
   * @param value 
   */
  truncate(value: string) {
    const MAX_VALUE_TO_TRUNCATE: number = 50;
    const lenght: number = (value.length < MAX_VALUE_TO_TRUNCATE) ? value.length : MAX_VALUE_TO_TRUNCATE;
    let newValue: string = '';
    for (let i = 0; i < lenght; i++) {
      newValue += value[i];
    }
    newValue += '...';
    return newValue;
  }
}
