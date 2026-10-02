import { Injectable } from '@angular/core';
import { batches} from './batches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class BatchesService 
{
  private url = "/src/Batchesdb.json";
  constructor(private http : HttpClient) { }

  public GetBatches() : Observable<batches[]>
  {
    return this.http.get<batches[]>(this.url);
  }
}
