import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { SlicePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { PercentPipe } from '@angular/common';


@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [PercentPipe,DatePipe,LowerCasePipe,UpperCasePipe,DecimalPipe,JsonPipe,TitleCasePipe,SlicePipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  public Name : string = "Marvellous Infosystems";
  public Value : number =12.345678;

  //json
  public Book= 
  {
    "Name" : "Let us C",
    "Price" : "520",
    "Author" : "Y Kanetkar",
  };

  public today =new Date();

  public no = 0.783;

}

