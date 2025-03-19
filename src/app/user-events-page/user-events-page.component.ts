import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventModel } from '../models/event.model';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { PageLoadingIndicatorsComponent } from '../page-loading-indicators/page-loading-indicators.component';
import { STATE } from '../app.constants';
import { BASE_URL } from '../app.constants';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-events-page',
  standalone: true,
  imports: [
    CommonModule, 
    UserNavigationHeaderComponent, 
    RouterLink,
    PageLoadingIndicatorsComponent
  ],
  templateUrl: './user-events-page.component.html',
  styleUrl: './user-events-page.component.scss',
})
export class UserEventsPageComponent implements OnInit {
  STATE = STATE;
  events: EventModel[] = [];
  loadingState: STATE = STATE.IDLE;
  errorMessage: string = '';
  title: string = '';  
  location: string = ''; 

  constructor(private eventService: EventService,
    private route: ActivatedRoute  ) {}

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'] || '';
      this.location = params['location'] || '';
      this.fetchEvents();
    });
  }

  fetchEvents(): void {
    this.loadingState = STATE.ON_GOING;

    this.eventService.getAllEvents(this.title, this.location).subscribe({
      next: (events) => {
        this.events = events;
        this.loadingState = STATE.SUCCESS;
      },
      error: (err) => {
        this.loadingState = STATE.ERROR;
        this.errorMessage = "No current events matching your search. Please Try Again. Thank you!";
      },
    });
  }

  getEventImageSrc(event: EventModel): string {
    return event && event.photo ? `${BASE_URL}/assets/${event.photo}` : 'assets/upload-picture.png';
  }
}
