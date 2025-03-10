import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from './models/event';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: Event[] = [
    {
      id: 1,
      title: "Libreng Gupit Para Sa Kabataan",
      date: "Monday, March 17, 2025",
      time: "8:00 AM to 5:00 PM",
      location: "Tanza, Cavite, Basketball Court",
      imageUrl: "LIBRENG-GUPIT.jpg"
    },
    {
      id: 2,
      title: "Libreng Gupit In Partnership With Red Republic Salon",
      date: "Wednesday, March 19, 2025",
      time: "8:00 AM to 5:00 PM",
      location: "Silang, Cavite, Basketball Court",
      imageUrl: "LIBRENG-GUPIT-2.jpg"
    },
  ];
}
