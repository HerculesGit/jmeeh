import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/shared/core/base-components/base-component.component';
import { Solution } from 'src/shared/models/solution';
import { User } from 'src/shared/models/user';
import { SolutionRepository } from '../../solution/solution-repository';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent extends BaseComponent implements OnInit {

  user: User;
  solutions: Solution[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    // this.user = this.userService.getUser(userId);

    this.user = this.currentUser;
    this.getAllSolutionByUser();
  }

  async getAllSolutionByUser() {
    this.solutions = await SolutionRepository.getAllSolutionByUserId(null);
  }
}
