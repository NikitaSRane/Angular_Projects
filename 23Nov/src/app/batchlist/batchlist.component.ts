import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent {
  public BatchesArray = [
    {"Name":"PPA", "Duration":"4 Months","Fees":20000},
    {"Name":"LB", "Duration":"3.5 Months","Fees":21000},
    {"Name":"Angular", "Duration":"3 Months","Fees":21500}
  ];
}
