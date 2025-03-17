import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event.model';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { RouterLink } from '@angular/router';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    UserNavigationHeaderComponent, 
    RouterLink,
    PageLoadingIndicatorsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  events: EventModel[] = [];
  loadingState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit() {
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
