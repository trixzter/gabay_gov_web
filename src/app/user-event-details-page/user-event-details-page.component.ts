import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { EventModel } from '../models/event.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';

@Component({
  selector: 'app-user-event-details-page',
  standalone: true,
  imports: [
    CommonModule, 
    UserNavigationHeaderComponent, 
    FormsModule,
    PageLoadingIndicatorsComponent
  ],
  templateUrl: './user-event-details-page.component.html',
  styleUrl: './user-event-details-page.component.scss',
})
export class UserEventDetailsPageComponent implements OnInit {
  event?: EventModel; 
  error: any;
  isLoading: boolean = true; 

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));


    setTimeout(() => {
      this.getEventDetails(eventId);
    }, 1500);
  }

  getEventDetails(eventId: number): void {
    this.eventService.getEvent(eventId).subscribe({
      next: (data) => {
        this.event = data;
        this.isLoading = false; 
        console.log('Event details loaded:', this.event);
      },
      error: (err) => {
        console.error('Error loading event details:', err);
        this.error = "Failed to load event details.";
        this.isLoading = false;
      }
    });
  }
}
