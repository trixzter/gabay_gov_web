import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventModel } from '../models/event.model';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';

@Component({
  selector: 'app-user-events-page',
  standalone: true,
  imports: [
    CommonModule, 
    UserNavigationHeaderComponent, 
    RouterLink
  ],
  templateUrl: './user-events-page.component.html',
  styleUrl: './user-events-page.component.scss',
})
export class UserEventsPageComponent {
  events: EventModel[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        this.events = events;
        console.log('Events loaded:', this.events); 
      },
      error: (err) => console.error('Error loading events:', err),
    });
  }
}
