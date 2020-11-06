import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  editForm: FormGroup;
  selectedRole: any;
  roles = [
    {
      label: 'Criador de Desafios',
      value: true,
      name: 'criado',
      role: 1
    },
    {
      label: 'Participante',
      value: false,
      name: 'participante',
      role: 2
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      name: this.formBuilder.control(undefined, [Validators.required]),
      about: this.formBuilder.control(undefined, [Validators.required]),
      role: this.formBuilder.control(undefined, [Validators.required])
    });
  }

  get name() { return this.editForm.get('name'); }

  setRole(event: any) {
    console.log(event)
  }

  private toUser() {
    const value = this.editForm.value;
  }

  onSubmit() {
    console.log('onSubmit')
    this.router.navigate(['hackton'])
  }

}
