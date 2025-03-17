import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventModel } from '../models/event.model';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';

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
  events: EventModel[] = [];
  loadingState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.loadingState = 'loading';

    setTimeout(() => { 
      this.eventService.getAllEvents().subscribe({
        next: (events) => {
          this.events = events;
          this.loadingState = 'success';
          console.log('Events loaded:', this.events); 
        },
        error: (err) => {
          this.loadingState = 'error';
          this.errorMessage = "Failed to load events. Please try again.";
          console.error('Error loading events:', err);
        },
      });
    }, 1500); 
  }
}
