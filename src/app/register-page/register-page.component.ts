import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
  
})
export class RegisterPageComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  registerUser() {
    console.log("Registering User...");
    console.log("First Name:", this.firstName);
    console.log("Last Name:", this.lastName);
    console.log("Email:", this.email);
    console.log("Username:", this.username);
    console.log("Password:", this.password);
  }
}
