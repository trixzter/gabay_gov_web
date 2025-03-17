import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModel } from '../models/event.model';
import { RouterLink } from '@angular/router';
import { EventService } from '../services/events/event.service';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    OrganizerNavigationHeaderComponent,
    PageLoadingIndicatorsComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events: EventModel[] = [];
  isLoading: boolean = true;
  error: any;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loadEvents();
    }, 1500);
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        this.events = events;
        this.isLoading = false;
        console.log('Events loaded:', this.events); 
      },
      error: (err) => {
        console.error('Error loading events:', err);
        this.error = "Failed to load events.";
        this.isLoading = false;
      }
    });
  }
}