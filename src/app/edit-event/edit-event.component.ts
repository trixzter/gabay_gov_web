import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Event } from '../models/event';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [CommonModule, FormsModule,
    OrganizerNavigationHeaderComponent
  ],
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  isDeletePopupVisible: boolean = false;  // Added explicit boolean type po
  event: Event = {} as Event;  // niremove ko po yung `| null` and initialized po with an empty object

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.getEventDetails(eventId);
  }

  getEventDetails(eventId: number): void {
    this.eventService.getEventById(eventId).subscribe((data) => {
      if (data) {
        this.event = data;
      }
    });
  }

  triggerFileInput(): void {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.event) { 
          this.event.imageUrl = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  saveEvent(): void {
    alert('Event saved!');
  }

  showDeleteConfirmation(): void {
    this.isDeletePopupVisible = true;
  }

  hideDeleteConfirmation(): void {
    this.isDeletePopupVisible = false;
  }

  deleteEvent(): void {
    alert('Event deleted!');
    this.isDeletePopupVisible = false;
  }
}