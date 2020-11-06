import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Database } from 'src/shared/database/database';
import { Challenge } from 'src/shared/models/challenge';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

  challenges: Challenge[]
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService,
  ) { }

  ngOnInit(): void {
    this.challenges = this.challengeService.challeges;
  }

  viewChallenge(challenge: Challenge) {
    this.router.navigate([`view/${challenge.id}`],
      {
        relativeTo: this.activatedRoute,
        queryParams: { id: challenge.id },
        queryParamsHandling: "preserve",
      }
    );
  }

  createHackaton() {
    this.relativeRouter('create');
  }

  goToViewUser() {
    this.router.navigate(['users/view/idFake']);
  }

  createUser() {
    this.router.navigate(['users/create']);
  }

  private relativeRouter(url: string) {
    this.router.navigate([url],
      { relativeTo: this.activatedRoute }
    );
  }

}
