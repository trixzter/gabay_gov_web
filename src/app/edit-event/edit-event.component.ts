import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/events/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventModel } from '../models/event.model';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';

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

  constructor(
    private eventService: EventService,
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
      },
      error: (err) => console.error('Error fetching event:', err),
    });
  }

  triggerFileInput(): void {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => 
      reader.readAsDataURL(file);
    }
  } 

  saveEvent(): void {
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
