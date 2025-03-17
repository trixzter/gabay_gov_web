import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/events/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventModel } from '../models/event.model';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { AssetService } from '../services/assets/asset.service';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OrganizerNavigationHeaderComponent
  ],
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {
  isDeletePopupVisible: boolean = false;
  event: EventModel = {} as EventModel;
  eventId: number = null as any;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  isUploading = false;

  constructor(
    private eventService: EventService,
    private assetService: AssetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.getEventDetails();
  }

  getEventDetails(): void {
    this.eventService.getEvent(this.eventId).subscribe({
      next: (data) => {
        this.event = data; 
        this.imagePreview = this.event.photo 
          ? `http://127.0.0.1:5000/assets/${this.event.photo}` 
          : 'upload-picture.png';
      },
      error: (err) => console.error('Error fetching event:', err),
    });
  }

  triggerFileInput(): void {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      // Preview the new selected image
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

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.assetService.uploadFile(formData).subscribe({
      next: (response) => {
        console.log('File upload response:', response);
        if (response && response.filename) {
          this.event.photo = response.filename;
          console.log('Updated event photo:', this.event.photo);
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
    if (this.isUploading) {
      alert('Please wait for image upload to complete');
      return;
    }

    this.eventService.updateEvent(this.eventId, this.event).subscribe({
      next: () => {
        alert('Event updated successfully!');
        this.router.navigate(['/events']);
      },
      error: (err) => console.error('Error updating event:', err),
    });
  }

  showDeleteConfirmation(): void {
    this.isDeletePopupVisible = true;
  }

  hideDeleteConfirmation(): void {
    this.isDeletePopupVisible = false;
  }

  deleteEvent(): void {
    this.eventService.deleteEvent(this.eventId).subscribe({
      next: () => {
        alert('Event deleted successfully!');
        this.isDeletePopupVisible = false;
        this.router.navigate(['/events']);
      },
      error: (err) => console.error('Error deleting event:', err),
    });
  }
}
