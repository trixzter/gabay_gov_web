import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/users/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  loginUser() {
    const credentials: UserModel = {
      username: this.username,
      password: this.password
    };
  
    this.userService.login(credentials).subscribe({
      next: (res: any) => {
        console.log('Login successful:', res);
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