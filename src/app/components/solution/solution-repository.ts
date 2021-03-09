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

  static async getOneSolution(hacktonId: any, solutionId: any): Promise<Solution> {
    return await new Database().getOneSolution(hacktonId, solutionId);
  }

  static async getAllSolutionByUserId(userId: number): Promise<Solution[]> {
    return new Database().getAllSolutionByUserId(userId);
  }

  static async submitSolution(solution: Solution, hacktonId: any): Promise<Solution> {
    return new Database().submitSolution(solution, hacktonId);
  }

}