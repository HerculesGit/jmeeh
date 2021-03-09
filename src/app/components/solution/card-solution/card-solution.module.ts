import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardSolutionComponent } from './card-solution.component';


@NgModule({
  declarations: [CardSolutionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CardSolutionComponent]
})
export class CardSolutionModule { }
