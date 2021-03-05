import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from 'src/shared/models/challenge';
import { ChallengesRespository } from '../../challenge/challenge-repository';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-submit-solution',
  templateUrl: './submit-solution.component.html',
  styleUrls: ['./submit-solution.component.scss']
})
export class SubmitSolutionComponent implements OnInit {

  IMAGE_FIELDS: string[] = ['', '', ''];

  submitForm: FormGroup;
  team: FormArray;
  links: FormArray;
  hacktonId: any;
  images: string[];
  challenge: Challenge;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.addMember();
    this.addLink();
    this.getHacktonId();
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

  onSubmit() {
    this.participantService.submitSolution({ id: Date.now, name: 'Hercules', role: 2 }, this.hacktonId);
    this.router.navigate(['/hackton']);
  }

}
