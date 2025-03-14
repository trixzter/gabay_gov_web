import { Component, importProvidersFrom } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    FormsModule, 
    RouterLink
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  governmentId: string = '';

  constructor(private router: Router, private userService: UserService) {}

  registerUser() {
    const user = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      government_id: this.governmentId
    };

    console.log('Sending user data:', user);

    this.userService.register(user).subscribe({
      next: (res) => {
        console.log('Registration successful:', res);
        alert('Registration successful!');
        this.router.navigate(['/login']); 
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Registration failed. Please try again.');
      }
    });
  }
}
