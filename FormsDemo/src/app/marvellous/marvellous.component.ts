import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css',
})
export class MarvellousComponent {
  MarvellousForm = new FormGroup(
    {
      username : new FormControl('nikita'),
      password : new FormControl(''),
      confirmpass : new FormControl('')
    }
  );
}
