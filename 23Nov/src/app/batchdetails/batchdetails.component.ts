import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent {
  public BatchesArray = [
    {"Name":"PPA", "Duration":"4 Months","Fees":20000},
    {"Name":"LB", "Duration":"3.5 Months","Fees":21000},
    {"Name":"Angular", "Duration":"3 Months","Fees":21500}
  ];
}
