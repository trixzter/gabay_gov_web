import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EventModel } from '../models/event.model';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-user-events-page',
  standalone: true,
  imports: [CommonModule, 
    UserNavigationHeaderComponent,
    RouterLink,],
  templateUrl: './user-events-page.component.html',
  styleUrl: './user-events-page.component.scss'
})
export class UserEventsPageComponent {
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
