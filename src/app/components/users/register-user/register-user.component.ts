import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/shared/enums/role';
import { User } from 'src/shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  editForm: FormGroup;
  selectedRole: any;

  isStudent: boolean;

  roles = [
    {
      label: 'Criador de Desafios',
      value: true,
      name: 'criador',
      role: Role.creator
    },
    {
      label: 'Participante',
      value: false,
      name: 'participante',
      role: Role.partitipant
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      id: this.formBuilder.control(undefined, []),
      name: this.formBuilder.control(undefined, [Validators.required]),
      about: this.formBuilder.control(undefined, [Validators.required]),
      imageUrl: this.formBuilder.control(undefined, [Validators.required]),
      address: this.formBuilder.group({
        state: this.formBuilder.control(undefined, [Validators.required]),
        city: this.formBuilder.control(undefined, [Validators.required])
      }),
      company: this.formBuilder.group({
        companyName: this.formBuilder.control(undefined, []),
      }),
      educationalIntitutional: this.formBuilder.group({
        institutionName: this.formBuilder.control(undefined, []),
      }),
      role: this.formBuilder.control(undefined, [Validators.required])
    });
  }

  get name() { return this.editForm.get('name'); }

  get address() { return this.editForm.get('address') as FormGroup }

  get company() { return this.editForm.get('company') as FormGroup }

  get educationalIntitutional() { return this.editForm.get('educationalIntitutional') as FormGroup }


  onChangeRadioButton(value) {

  }


  private toUser(): User {
    const value = this.editForm.value;

    const role = (value.role.toString() == Role.creator.toString())
      ? Role.creator : Role.partitipant;


    if (this.isStudent) {
      this.company.setValue(null);
    } else {
      this.educationalIntitutional.setValue(null);
    }

    return {
      id: value.id,
      name: value.name,
      role: role,
      image: value.imageUrl,
    };
  }

  onSubmit() {
    this.userService.registerUser(this.toUser());
    this.router.navigate(['hackton'])
  }
}
