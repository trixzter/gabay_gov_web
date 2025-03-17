import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { EventModel } from '../models/event.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BASE_URL } from '../app.constants';

@Component({
  selector: 'app-user-event-details-page',
  standalone: true,
  imports: [
    CommonModule, 
    UserNavigationHeaderComponent, 
    FormsModule
  ],
  templateUrl: './user-event-details-page.component.html',
  styleUrl: './user-event-details-page.component.scss',
})
export class UserEventDetailsPageComponent implements OnInit {
  event: EventModel = {} as EventModel;
  error: any;
  BASE_URL = BASE_URL;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.getEventDetails(eventId);
  }
  
  getEventDetails(eventId: number): void {
    this.eventService.getEvent(eventId).subscribe({
      next: (data) => {
        this.event = data; 
        console.log('Event details loaded:', this.event);
      },
      error: (err) => console.error('Error loading event details:', err)
    });
  }
}
