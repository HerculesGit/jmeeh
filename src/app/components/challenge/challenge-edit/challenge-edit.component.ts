import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/shared/core/base-components/base-component.component';
import { AcceptanceCriteria } from 'src/shared/models/acceptance-criteria';
import { Challenge } from 'src/shared/models/challenge';
import { ChallengeService } from '../challenge.service';


@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent extends BaseComponent implements OnInit {

  editForm: FormGroup;
  selectedDifficultyLevel: string = 'Iniciante';
  difficultyLevels: string[] = [
    "Iniciante",
    "Intermediário",
    "Avançado"
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      name: this.formBuilder.control(undefined, []),
      description: this.formBuilder.control(undefined, []),
      difficultyLevel: this.formBuilder.control(undefined, []),
      reward: this.formBuilder.control(undefined, []),
      points: this.formBuilder.control(undefined, []),
      acceptanceCriteria: this.formBuilder.array([]),
    });

    this.addAcceptanceCriteria();
  }

  onSelectedDifficultyLevel(level: string) {
    this.editForm.get('difficultyLevel').setValue(level);
  }

  get acceptanceCriteriaForm() {
    return this.editForm.get("acceptanceCriteria") as FormArray;
  }

  addAcceptanceCriteria() {
    const criteria = this.formBuilder.group({
      name: this.formBuilder.control(undefined, [Validators.required]),
      description: this.formBuilder.control(undefined, [Validators.required]),
    });
    this.acceptanceCriteriaForm.push(criteria);
  }

  private toChallenge() {
    const value = this.editForm.value;
    let challenge: Challenge = {
      id: Date.now(),
      owner: this.currentUser,
      title: value.name,
      images: [
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b7dfae65355547.5af1a1b1482ab.png',
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b7dfae65355547.5af1a1b1482ab.png'
      ],
      description: value.description,
      difficultyLevel: value.difficultyLevel,
      points: value.points,
      reward: value.reward,
      acceptanceCriteria: this.toAcceptanceCriteriaValues(),
      participants: [],
      links: [],
      submissions: [],
      startDate: new Date()
    };

    console.log(challenge)

    return challenge;
  }

  private toAcceptanceCriteriaValues(): AcceptanceCriteria[] {
    const list: AcceptanceCriteria[] = [];
    (this.acceptanceCriteriaForm.value as any[]).map(field => {
      list.push({ name: field.name, description: field.description });
    });
    return list;
  }


  onSubmit() {
    this.router.navigate(['/'], {
      relativeTo: this.activatedRoute
    })
    this.challengeService.addHackaton(this.toChallenge());
  }


}
