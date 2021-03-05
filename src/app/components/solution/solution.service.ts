import { Injectable } from '@angular/core';
import { Database } from 'src/shared/database/database';
import { Solution } from 'src/shared/models/solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  database: Database = new Database();
  constructor() { }

  getOneSolution(hacktonId: any, solutionId: any): Solution {
    return this.database.getOneSolution(hacktonId, solutionId);
  }
  // getSolutions(hacktonId: any): Solution {
  //   this.database.getSubmissions(hacktonId);
  // }
}
