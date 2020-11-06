import { Injectable } from '@angular/core';
import { User } from 'src/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(userId: any): User {
    return
  }

}
