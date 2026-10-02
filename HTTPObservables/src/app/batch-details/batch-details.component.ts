import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css',
  providers: [BatchService],
})
export class BatchDetailsComponent {
  public BatchesArray : any[] =[];
  constructor(private sobj : BatchService)
  {
    sobj.GetBatches().subscribe(data => this.BatchesArray =data);
  }
}
