import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';
//import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public message :any;
  constructor(private sobj : MarvellousService)
  {}

  ngOnInit(): void {
    this.sobj.GetBatches().subscribe(data => this.message=data);
  }

}
