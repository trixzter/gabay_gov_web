import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { EventModel } from '../models/event.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';
import { STATE, BASE_URL } from '../app.constants';


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
  STATE = STATE;
  event?: EventModel; 
  errorMessage: string = '';
  loadingState = STATE.IDLE; 

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const eventId = Number(params.get('id'));

      if (!isNaN(eventId) && eventId > 0) {
        this.getEventDetails(eventId);
      } else {
        this.loadingState = STATE.ERROR;
        this.errorMessage = 'Invalid event ID.';
      }
    });
  }

  getEventImageSrc(event: EventModel): string {
    return event && event.photo ? `${BASE_URL}/assets/${event.photo}` : 'assets/upload-picture.png';
  }
  
  getEventDetails(eventId: number): void {
    this.loadingState = STATE.ON_GOING;
    this.eventService.getEvent(eventId).subscribe({
      next: (data) => {
        this.event = data;
        this.loadingState = STATE.SUCCESS; 
        console.log('Event details loaded:', this.event);
      },
      error: (err) => {
        console.error('Error loading event details:', err);
        this.errorMessage = "Failed to load event details.";
        this.loadingState = STATE.ERROR;
      }
    });
  }
}
