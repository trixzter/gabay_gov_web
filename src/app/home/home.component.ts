import { Component } from '@angular/core';
import { Event } from './models/event';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  events: Event[] = [
    {
      id: 1,
      title: "Libreng Gupit Para Sa Kabataan",
      date: "Monday, March 17, 2025",
      time: "8:00 AM to 5:00 PM",
      location: "Tanza, Cavite, Basketball Court",
      imageUrl: "LIBRENG-GUPIT.jpg",
      description: "Libreng Gupit Para Sa Kabataan is a program that offers free haircut services to children in the community.This program aims to help children look presentable and feel good about themselves. It also promotes good hygiene practices among children. The program is open to all children in the community, and no registration is required. The program is organized by the local government unit in partnership with local barbershops and salons.",
       //no description in the home page
    },
    {
      id: 2,
      title: "Libreng Gupit 2",
      date: "Wednesday, March 20, 2025",
      time: "9:00 AM to 4:00 PM",
      location: "City Health Center",
      imageUrl: "LIBRENG-GUPIT-2.jpg",
      description: "Libreng Gupit Para Sa Kabataan is a program that offers free haircut services to children in the community.This program aims to help children look presentable and feel good about themselves. It also promotes good hygiene practices among children. The program is open to all children in the community, and no registration is required. The program is organized by the local government unit in partnership with local barbershops and salons.",
      //no description in the home page
    },
    {
      id: 3,
      title: "Libreng Gupit 2",
      date: "Tuesday, March 18, 2025",
      time: "10:00 AM to 3:00 PM",
      location: "Barangay Hall",
      imageUrl: "LIBRENG-GUPIT-2.jpg",
      description: "Libreng Gupit Para Sa Kabataan is a program that offers free haircut services to children in the community. This program aims to help children look presentable and feel good about themselves. It also promotes good hygiene practices among children. The program is open to all children in the community, and no registration is required. The program is organized by the local government unit in partnership with local barbershops and salons.",
       //no description in the home page
    }
  ];
}
