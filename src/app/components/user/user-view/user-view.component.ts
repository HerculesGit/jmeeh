import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params.id
    // this.user = this.userService.getUser(userId);

    this.user = {
      name: 'James Jacob',
      role: 1
    };
  }
}
