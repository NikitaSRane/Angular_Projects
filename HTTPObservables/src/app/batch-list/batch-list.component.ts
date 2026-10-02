import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css',
  providers: [BatchService]
})
export class BatchListComponent {
  public BatchesArray : any[] =[];
  constructor(private sobj : BatchService)
  {
    sobj.GetBatches().subscribe(data => this.BatchesArray =data);
  }

}

