import { Injectable } from '@angular/core';
import { User } from 'src/shared/models/user';
import { Database } from '../database/database';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor() { }

  async getCurrentUser(): Promise<User> {
    return new Database().getCurrentUser();
  }

  async saveUser(user: User) {
    return new Database().registerUser(user);
  }
}
