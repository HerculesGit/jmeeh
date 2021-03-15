import { Injectable } from '@angular/core';
import { User } from 'src/shared/models/user';
import { UserRepository } from 'src/shared/repositories/user-repository';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userRepository: UserRepository) { }

  getCurrentUser = (): Promise<User> => this.userRepository.getCurrentUser();

  registerUser = (user: User): Promise<User> => this.userRepository.saveUser(user);
}
