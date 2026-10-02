import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css',
})
export class MarvellousComponent {
  SupportForm=new FormGroup(
    {
      fname:new FormControl(''),
      lname:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      address:new FormControl('')
    }
  );

}
