import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-event-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-event-details-page.component.html',
  styleUrl: './user-event-details-page.component.scss'
})
export class UserEventDetailsPageComponent {
  event = {
    title: "Libreng Gupit Para Sa Kabataan",
    date: "Monday, March 17, 2025 ",
    time: "8:00 AM to 5:00 PM",
    location: "tiaong",
    about: "Tuloy tuloy lang ang Serbisyo at Suporta natin para sa mga Mag-aaral na KABATAAN na mag babalik Eskwela! Libreng GUPIT! handog sa inyo ng Sangguniang Kabataan! sa Sampalucan. Siguraduhing kasama ninyo ang inyong mga Magulang!",
  };
}
