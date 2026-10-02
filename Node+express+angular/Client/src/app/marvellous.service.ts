import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  // dependency injection of http
  constructor(private http :HttpClient) { }

  getBatches()
  {
    // It connect with Node_Express server
    return this.http.get("http://localhost:5100/getbatches");
  }
}
