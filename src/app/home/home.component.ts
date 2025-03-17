import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event.model';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { RouterLink } from '@angular/router';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';
import { STATE } from '../app.constants';

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
  STATE = STATE;
  events: EventModel[] = [];
  loadingstate: STATE = STATE.IDLE;
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.loadingstate = STATE.ON_GOING;

      this.eventService.getAllEvents().subscribe({
        next: (events) => {
          this.events = events;
          this.loadingstate = STATE.SUCCESS;
          console.log('Events loaded:', this.events);
        },
        error: (err) => {
          this.loadingstate = STATE.ERROR;
          this.errorMessage = "Failed to load events. Please try again.";
          console.error('Error loading events:', err);
        },
      });
  }
}
