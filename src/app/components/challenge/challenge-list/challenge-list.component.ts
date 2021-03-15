import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/shared/core/base-components/base-component.component';
import { Database } from 'src/shared/database/database';
import { Role } from 'src/shared/enums/role';
import { Challenge } from 'src/shared/models/challenge';
import { User } from 'src/shared/models/user';
import { UserService } from '../../users/user.service';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent extends BaseComponent implements OnInit {

  challenges: Challenge[]
  constructor(
    private challengeService: ChallengeService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllChallenges();
    super.ngOnInit();
  }

  async getAllChallenges() {
    try {
      this.challenges = await this.challengeService.getAllHackathon();
    } catch (error) {
      console.log(error);
    }
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

  isCreator = () => this.currentUser.role == Role.creator;
}