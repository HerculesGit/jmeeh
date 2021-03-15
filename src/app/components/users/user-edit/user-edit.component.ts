import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/shared/models/user';
import { UserService } from '../user.service';

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
      role: this.formBuilder.control(undefined, [Validators.required])
    });
  }

  get name() { return this.editForm.get('name'); }


  private toUser(): User {
    const value = this.editForm.value;
    return {
      id: value.id,
      name: value.name,
      role: value.role,
      image: value.imageUrl,
    };
  }

  onSubmit() {
    this.userService.registerUser(this.toUser());
    this.router.navigate(['hackton'])
  }
}
