import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor() { }

  public GetBatches()
  {
    return [{"Name":"PPA","Duration":"4 Months","Fees":21000},
      {"Name":"LB","Duration":"3 Months","Fees":22000},
      {"Name":"Python","Duration":"4.5 Months","Fees":20000}]
  }
}
