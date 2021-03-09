import { Injectable, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/shared/models/user";
import { AppInjector } from "../app-injector";
import { BaseService } from "./base-service";

@Injectable()
export abstract class BaseComponent implements OnInit {

  currentUser: User;
  isLoading: boolean = false;

  protected formBuilder: FormBuilder = AppInjector.get(FormBuilder);

  protected router: Router = AppInjector.get<Router>(Router);

  protected baseActivatedRoute: ActivatedRoute = AppInjector.get<ActivatedRoute>(ActivatedRoute);

  protected baseService: BaseService = AppInjector.get<BaseService>(BaseService);

  
  ngOnInit(): void {
    this.getCurrentUser();
  }

  async getCurrentUser() {
    this.isLoading = true;
    try {
      this.currentUser = await this.baseService.getCurrentUser();
    } catch (error) {
      console.error(error);
    }
    this.isLoading = false;
  }
}