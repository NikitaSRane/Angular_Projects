import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent {
  public Batches=[

    {"Name": "PPA","Duration" : "4 Months", "Fees": 20000},
    {"Name":"LB","Duration" : "3.5 Months", "Fees" :21000},
    {"Name":"Python","Duration" : "3 Months", "Fees" :21500},
  ]
}
