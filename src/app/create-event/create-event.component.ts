import { Component } from '@angular/core';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { EventService } from '../services/events/event.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [OrganizerNavigationHeaderComponent],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
})
export class CreateEventComponent {}
