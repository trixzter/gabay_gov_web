import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
import { AssetService } from '../services/assets/asset.service';
import { UserModel } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  governmentId: string = '';
  selectedFile: File | null = null;
  isUploading = false;
  submitted = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private assetService: AssetService
  ) {}

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
     
      const reader = new FileReader();
      reader.onload = () => {
        this.governmentId = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
      
    
      this.uploadFile();
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.assetService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        if (response && response.filename) {
          this.governmentId = response.filename;
        }
        this.isUploading = false;
      },
      error: () => {
        console.error('Error uploading file:');
        this.isUploading = false;
        alert('Failed to upload government ID. Please try again.');
      },
    });
  }

  registerUser(): void {
    const user: UserModel = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      government_id: this.governmentId,
    };

    this.userService.register(user).subscribe({
      next: () => {
        console.log('Event created successfully:');
        this.submitted = true;
        this.router.navigate(['/login']);
      },
      error: () => {
        console.error('Error creating event:');
        alert('Failed to save event. Please try again.');
      }
    });
  }
}


  

