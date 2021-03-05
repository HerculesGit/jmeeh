import { Injectable } from "@angular/core";
import { Database } from "src/shared/database/database";
import { Challenge } from "src/shared/models/challenge";
import { Solution } from "src/shared/models/solution";

@Injectable({
  providedIn: 'root'
})
export class SolutionRepository {
  constructor() {

  }

  static async getAllSolutionByUserId(userId: number): Promise<Solution[]> {
    return new Database().getAllSolutionByUserId(userId);
  }
}