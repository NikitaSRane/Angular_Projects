import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private http : HttpClient)
  {

  }
  public GetBatches():Observable<any>
  {
    return this.http.get("http://localhost:2700/BatchDetails");
  }
}
