import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  //create the object of event emitter
  @Output() public Myevent = new EventEmitter();

  public SendMessage()
  {
    this.Myevent.emit("Hello Parent...");
  }
}
