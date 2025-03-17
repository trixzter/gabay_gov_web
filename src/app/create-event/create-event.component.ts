import { Component, OnInit } from '@angular/core';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { AssetService } from '../services/assets/asset.service';
import { EventModel } from '../models/event.model';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    OrganizerNavigationHeaderComponent, 
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
})
export class CreateEventComponent implements OnInit {
  eventModel: EventModel = {} as EventModel;
  submitted = false;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  isUploading = false;

  constructor(
    private eventService: EventService, 
    private assetService: AssetService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
      
      // Upload the file
      this.uploadFile();
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) return;
  
    this.isUploading = true;
    console.log('Uploading file:', this.selectedFile.name);
  
    const formData = new FormData(); // ✅ Create FormData object
    formData.append('file', this.selectedFile); // ✅ Append the file
  
    this.assetService.uploadFile(formData).subscribe({
      next: (response) => {
        console.log('File upload response:', response);
        if (response && response.filename) {
          this.eventModel.photo = response.filename;
          console.log('Photo filename set to:', this.eventModel.photo);
        }
        this.isUploading = false;
      },
      error: (error) => {
        console.error('Error uploading file:', error);
        this.isUploading = false;
        alert('Failed to upload image. Please try again.');
      }
    });
  }

  saveEvent(): void {
    console.log('Save event called with data:', this.eventModel);
    
    if (this.isUploading) {
      alert('Please wait for image upload to complete');
      return;
    }
    
    this.eventService.createEvent(this.eventModel).subscribe({
      next: (response) => {
        console.log('Event created successfully:', response);
        this.submitted = true;
        this.router.navigate(['/events']);
      },
      error: (error) => {
        console.error('Error creating event:', error);
        alert('Failed to save event. Please try again.');
      }
    });
  }
}