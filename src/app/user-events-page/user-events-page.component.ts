import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventModel } from '../models/event.model';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { catchError, of } from 'rxjs';

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

  ngOnInit(): void {
    this.eventService.getAllEvents()
      .pipe(
        catchError(error => {
          console.error('Error loading events:', error);
          return of([]); 
        })
      )
      .subscribe((data) => {
        if (data) {
          this.events = data;
          console.log('Events loaded:', this.events);
        }
      });
  }
}  