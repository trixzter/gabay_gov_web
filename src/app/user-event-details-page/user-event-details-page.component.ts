import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EventService } from '../services/event.service';
import { EventModel } from '../models/event.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-event-details-page',
  standalone: true,
  imports: [CommonModule, UserNavigationHeaderComponent, FormsModule],
  templateUrl: './user-event-details-page.component.html',
  styleUrl: './user-event-details-page.component.scss'
})
export class UserEventDetailsPageComponent implements OnInit {
  event: EventModel = {} as EventModel;  // niremove ko po yung `| null` and initialized po with an empty object

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.getEventDetails(eventId);
  }

  getEventDetails(eventId: number): void {
    this.eventService.getEventById(eventId).subscribe((data) => {
      if (data) {
        this.event = data;
      }
    });
  }
}
