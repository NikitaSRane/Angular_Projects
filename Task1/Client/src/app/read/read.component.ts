import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-read',
  standalone: false,
  
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {
  public message :any;
  constructor(private sobj : MarvellousService)
  {}

  ngOnInit(): void {
    this.sobj.GetBatches().subscribe(data => this.message=data);
  }


}
