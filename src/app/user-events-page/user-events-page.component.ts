import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Event } from '../events/models/event';

@Component({
  selector: 'app-user-events-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-events-page.component.html',
  styleUrl: './user-events-page.component.scss'
})
export class UserEventsPageComponent {
  user: Event[] = [
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
    }
  ];
}
