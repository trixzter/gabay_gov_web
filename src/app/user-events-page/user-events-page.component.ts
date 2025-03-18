import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventModel } from '../models/event.model';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';
import { STATE } from '../app.constants';
import { BASE_URL } from '../app.constants';

@Component({
  selector: 'app-user-events-page',
  standalone: true,
  imports: [
    CommonModule, 
    UserNavigationHeaderComponent, 
    RouterLink,
    PageLoadingIndicatorsComponent
  ],
  templateUrl: './user-events-page.component.html',
  styleUrl: './user-events-page.component.scss',
})
export class UserEventsPageComponent implements OnInit {
  STATE = STATE;
  events: EventModel[] = [];
  loadingState: STATE = STATE.IDLE;
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.loadingState = STATE.ON_GOING;

      this.eventService.getAllEvents().subscribe({
        next: (events) => {
          this.events = events;
          this.loadingState = STATE.SUCCESS;
          console.log('Events loaded:', this.events); 
        },
        error: (err) => {
          this.loadingState = STATE.ERROR;
          this.errorMessage = "Failed to load events. Please try again.";
          console.error('Error loading events:', err);
        },
      });
    }

  getEventImageSrc(event: EventModel): string {
    return event && event.photo ? `${BASE_URL}/assets/${event.photo}` : 'assets/upload-picture.png';
  }
}
