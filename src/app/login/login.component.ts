import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Fixed property name
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  loginUser() {
    const credentials = { username: this.username, password: this.password };

    this.userService.login(credentials).subscribe({ // Changed from register() to login()
      next: (res: any) => {
        console.log('Login successful:', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
        alert('Login successful!');
        this.router.navigate(['/events']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid username or password.');
      }
    });
  }
}
