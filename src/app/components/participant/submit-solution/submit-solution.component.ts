import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/shared/core/base-components/base-component.component';
import { Challenge } from 'src/shared/models/challenge';
import { Solution } from 'src/shared/models/solution';
import { ChallengesRespository } from '../../challenge/challenge-repository';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-submit-solution',
  templateUrl: './submit-solution.component.html',
  styleUrls: ['./submit-solution.component.scss']
})
export class SubmitSolutionComponent extends BaseComponent implements OnInit {

  IMAGE_FIELDS: string[] = ['', '', ''];

  submitForm: FormGroup;
  team: FormArray;
  hacktonId: any;
  images: string[];
  challenge: Challenge;

  constructor(
    private activatedRoute: ActivatedRoute,
    private participantService: ParticipantService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.addMember();
    this.addLink();
    this.getHacktonId();

    super.ngOnInit();
  }


  initForm() {
    this.submitForm = this.formBuilder.group({
      title: this.formBuilder.control(undefined, []),
      description: this.formBuilder.control(undefined, []),
      links: this.formBuilder.array([]),
      team: this.formBuilder.array([]),
    });
  }

  get teamForm() {
    return this.submitForm.get("team") as FormArray;
  }
  get linksForm() {
    return this.submitForm.get("links") as FormArray;
  }

  addMember() {
    const member = this.formBuilder.control(undefined, [Validators.required]);
    this.teamForm.push(member);
  }

  addLink() {
    const link = this.formBuilder.control(undefined, [Validators.required]);
    this.linksForm.push(link);
  }

  private async getHacktonId() {
    this.hacktonId = this.activatedRoute.snapshot.params.id;
    this.challenge = await ChallengesRespository.getHacktonById(this.hacktonId);
  }

  private toSolution(): Solution {
    const value = this.submitForm.value;

    const links = (!this.linksForm.value
      || this.linksForm.value == null)
      ? [] : this.linksForm.value;

    const solution: Solution = {
      id: null,
      challengeId: this.hacktonId,
      description: value.description,
      links: links,
      pointsWins: null,
      rewardWins: null,
      title: value.title,
      user: this.currentUser,
    };

    return solution;
  }

  onSubmit() {
    this.participantService.submitSolution(this.toSolution(), this.hacktonId).then((solution) => {
      console.log(solution);
      this.router.navigate(['/hackton']);
    }).catch((ex) => console.error(ex));
  }

}
