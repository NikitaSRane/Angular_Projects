import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  message: any;

  constructor(private service : MarvellousService)
  {}
  // this method gets automatically called when component gets created
  ngOnInit(): void {
    this.service.getBatches().subscribe(data =>
    {
      this.message=data;
    })
  }
}
