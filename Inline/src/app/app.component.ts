import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PpaComponent } from './ppa/ppa.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { AngComponent } from './ang/ang.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PpaComponent,MarvellousComponent,AngComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inline';
}
