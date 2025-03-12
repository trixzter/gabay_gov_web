import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModel } from '../models/event.model';
import { RouterLink } from '@angular/router';
import { EventService } from '../services/event.service';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';

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

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      (events) => {
        this.events = events;
      }
    );
  }
}