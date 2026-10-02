import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css',
  
})
export class BatchlistComponent {

    public batches : any=[];
    public constructor(private sobj : BatchesService)
    {
      sobj.getBatches().subscribe(data =>this.batches=data);
    }
  
  
}
