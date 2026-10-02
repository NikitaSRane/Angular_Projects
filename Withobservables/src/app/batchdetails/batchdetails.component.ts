import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';
import { batches } from '../batches';
@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css',
  providers : [BatchesService]
})
export class BatchdetailsComponent 
{
  public batches : batches[] = [];

  public constructor(private sobj : BatchesService)
  {
      sobj.GetBatches().subscribe(data => this.batches = data);
      console.log(this.batches);
  }
}
