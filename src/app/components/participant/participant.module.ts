import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubmitSolutionComponent } from './submit-solution/submit-solution.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticipantService } from './participant.service';

const routes: Routes = [
  {
    path: '',
    component: SubmitSolutionComponent
  }
]

@NgModule({
  declarations: [SubmitSolutionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ParticipantService
  ]
})
export class ParticipantModule { }
