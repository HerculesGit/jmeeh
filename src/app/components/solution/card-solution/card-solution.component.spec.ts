import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSolutionComponent } from './card-solution.component';

describe('CardSolutionComponent', () => {
  let component: CardSolutionComponent;
  let fixture: ComponentFixture<CardSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
