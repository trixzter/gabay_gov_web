import { Component } from '@angular/core';
import { EventModel } from '../models/event.model';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    UserNavigationHeaderComponent, 
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
