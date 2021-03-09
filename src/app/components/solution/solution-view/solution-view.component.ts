import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from 'src/shared/models/challenge';
import { Solution } from 'src/shared/models/solution';
import { User } from 'src/shared/models/user';
import { SolutionService } from '../solution.service';

@Component({
  selector: 'app-solution-view',
  templateUrl: './solution-view.component.html',
  styleUrls: ['./solution-view.component.scss']
})
export class SolutionViewComponent implements OnInit {
  solution: Solution;
  challenge: Challenge;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private solutionService: SolutionService,
  ) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params)
    this.getOneSolution();
  }

  goToTeamMember(member: User) {
    console.log(`go to team member ${member.name}`);
    this.router.navigate([`users/view/${member.role}`])
  }

  async getOneSolution() {
    const solutionId = this.activatedRoute.snapshot.params.solutionId;
    const hackatonId = this.activatedRoute.snapshot.params.id;
    this.solution = await this.solutionService.getOneSolution(hackatonId, solutionId);
  }

}
