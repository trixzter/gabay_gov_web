import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModel } from '../models/event.model';
import { RouterLink } from '@angular/router';
import { EventService } from '../services/events/event.service';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { BASE_URL } from '../app.constants';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    OrganizerNavigationHeaderComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit{
  events: EventModel[] = [];
  BASE_URL = BASE_URL;

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