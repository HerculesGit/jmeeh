import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-submit-solution',
  templateUrl: './submit-solution.component.html',
  styleUrls: ['./submit-solution.component.scss']
})
export class SubmitSolutionComponent implements OnInit {

  submitForm: FormGroup;
  team: FormArray;
  links: FormArray;
  hacktonId: any;

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

  private getHacktonId() {
    this.hacktonId = this.activatedRoute.snapshot.params.id;
  }

  onSubmit() {
    this.participantService.submitSolution({ name: 'Hercules', role: 2 }, this.hacktonId);
    this.router.navigate(['/hackton']);
  }

}
