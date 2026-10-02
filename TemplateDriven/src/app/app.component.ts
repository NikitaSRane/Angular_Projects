import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TemplateDriven';
  user = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit(): void {
    alert("form submitted successfully.");
    //console.log('Form Submitted!', this.user);
  }
}

