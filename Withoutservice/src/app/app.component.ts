import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BatchdetailsComponent,BatchlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Withoutservice';
  
}
