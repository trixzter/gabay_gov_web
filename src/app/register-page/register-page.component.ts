import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  standalone: true,
  providers: [],
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

  constructor(private http: HttpClient, private router: Router) {}

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

    this.http.post('http://127.0.0.1:5000/users/register', user).subscribe({
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
