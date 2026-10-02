import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  public information :string = "";

  public MarvellousEvent()
  {
    console.log("Click me button pressed");
  }
  public AngularEvent()
  {
    this.information="Angular button pressed.";
  }
  public PythonEvent(value :any)
  {
    console.log(value)
  }
}
