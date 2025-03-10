import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from './models/event';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { RouterLink } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit{
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      (events) => {
        this.events = events;
      }
    );
  }
}