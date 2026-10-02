import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent {

  public Batches : any =[];
  constructor(private batchobj : BatchService)
  {
    this.Batches=batchobj.GetBatches();
  }
}
