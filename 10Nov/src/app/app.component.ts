import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { PythonComponent } from './python/python.component';
import { PPAComponent } from './ppa/ppa.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarvellousComponent,PythonComponent,PPAComponent,EventBindingComponent,ClassBindingComponent

  ,StylebindingComponent,TwowaybindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '10Nov';
}
