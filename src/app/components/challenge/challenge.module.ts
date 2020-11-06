import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeViewComponent } from './challenge-view/challenge-view.component';

const routes: Routes = [
  {
    path: '',
    component: ChallengeListComponent,
  },
  {
    path: 'create', // hackton/create
    component: ChallengeEditComponent,
  },
  {
    path: 'view/:id', // hackton/view
    component: ChallengeViewComponent,
  },
  {
    path: 'create/preview', // hackton/preview when owner
    component: ChallengeViewComponent,
  },

  {
    path: 'view/:id/submit',
    loadChildren: () => import('../participant/participant.module').then(m => m.ParticipantModule),
  },

  {
    path: 'view/:id/solution/:solutionId',
    loadChildren: () => import('../solution/solution.module').then(m => m.SolutionModule),
  },
];

@NgModule({
  declarations: [ChallengeEditComponent, ChallengeListComponent, ChallengeViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ChallengeModule { }
