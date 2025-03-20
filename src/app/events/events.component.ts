import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModel } from '../models/event.model';
import { RouterLink, RouterModule } from '@angular/router';
import { EventService } from '../services/events/event.service';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';
import { STATE } from '../app.constants';
import { BASE_URL } from '../app.constants';
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    OrganizerNavigationHeaderComponent,
    PageLoadingIndicatorsComponent,
    RouterModule
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  STATE = STATE;
  events: EventModel[] = [];
  loadingState: string = STATE.IDLE;
  errorMessage: string = '';


  constructor(private eventService: EventService) {}
  
  getEventImageSrc(event: EventModel): string {
    return event && event.photo ? `${BASE_URL}/assets/${event.photo}` : 'assets/upload-picture.png';
  }

  ngOnInit() {
      this.loadEvents();
  }

  loadEvents(): void {
    this.loadingState = STATE.ON_GOING;

    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        this.events = events;
        this.loadingState = STATE.SUCCESS;
        console.log('Events loaded:', this.events); 
      },
      error: (err) => {
        console.error('Error loading events:', err);
        this.errorMessage = "Failed to load events.";
        this.loadingState = STATE.ERROR;
      }
    });
  }
}