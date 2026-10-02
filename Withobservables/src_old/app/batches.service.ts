import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batches } from './Batches';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  public url="./Batches.json"
  constructor(private http : HttpClient) 
  { }

  public getBatches():Observable<Batches[]>
  {
    return this.http.get<Batches[]>(this.url);
  }
}
