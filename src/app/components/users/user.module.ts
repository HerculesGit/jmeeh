import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolutionViewComponent } from '../solution/solution-view/solution-view.component';
import { CardSolutionModule } from '../solution/card-solution/card-solution.module';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: UserViewComponent
  },
  {
    path: 'create',
    component: UserEditComponent
  },
  {
    path: 'solution/:userId/solution/:idsolution',
    component: SolutionViewComponent
  }
];


@NgModule({
  declarations: [ 
    UserViewComponent, 
    UserEditComponent, 
    // TODO: Conversar com o professor como usar
    RegisterUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardSolutionModule,

    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
