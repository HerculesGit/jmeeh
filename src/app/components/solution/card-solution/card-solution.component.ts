import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solution } from 'src/shared/models/solution';
import { Constants } from 'src/shared/constants/constants';

@Component({
  selector: 'app-card-solution',
  templateUrl: './card-solution.component.html',
  styleUrls: ['./card-solution.component.scss']
})
export class CardSolutionComponent implements OnInit {

  @Input() solution: Solution;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goToSolution() {
    this.router.navigate(
      [`/${Constants.BASE_URL}/view/${this.solution.challengeId}/${Constants.SOLUTION}/${this.solution.id}`],
        {
          relativeTo: this.activatedRoute,
          queryParams: { id: this.solution.id },
          queryParamsHandling: "preserve",
        }
    );
  }
}
