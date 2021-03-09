import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionViewComponent } from './solution-view/solution-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SolutionViewComponent
  }
]


@NgModule({
  declarations: [SolutionViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
})
export class SolutionModule { }
