import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batchesinterface } from './Batchesinterface';
//import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BatchService {

  public url="assets/batchesdb.json";

  constructor(private http :HttpClient)
  {}
  public GetBatches():Observable<Batchesinterface[]>
  {

    return this.http.get<Batchesinterface[]>(this.url);
  }

}
