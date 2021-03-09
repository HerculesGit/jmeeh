import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solution } from 'src/shared/models/solution';
import { User } from 'src/shared/models/user';
import { SolutionRepository } from '../../solution/solution-repository';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User;
  solutions: Solution[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params.id
    // this.user = this.userService.getUser(userId);

    this.user = {
      id: userId,
      name: 'James Jacob',
      role: 1,
      image: 'https://goodmenproject.com/wp-content/uploads/2019/09/shutterstock_1150576721.jpg',
    };

    this.getAllSolutionByUser();
  }

  async getAllSolutionByUser() {
    this.solutions = await SolutionRepository.getAllSolutionByUserId(null);
  }
}
