import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    {
      id: 1,
      title: 'Libreng Gupit Para Sa Kabataan',
      date: '2025-05-20',
      time: '10:00 AM',
      location: 'Rizal',
      imageUrl: 'LIBRENG-GUPIT.jpg',
      description: "Tuloy tuloy lang ang Serbisyo at Suporta natin para sa mga Mag-aaral na KABATAAN na mag babalik Eskwela! Libreng GUPIT! handog sa inyo ng Sangguniang Kabataan!  sa Sampalucan. Siguraduhing kasama ninyo ang inyong mga Magulang. Kita-kits!"
    },
    {
      id: 2,
      title: 'Libre Gupit Para Sa Kabataan',
      date: '2025-05-10',
      time: '9:00 AM',
      location: 'Rizal',
      imageUrl: 'LIBRENG-GUPIT-2.jpg',
      description: "Libreng gupit ulit mga suki! pagupit na kayo libre lahat to support the youth of today. Kita kits sa ating Barangay Hall. "
    },
  ];

  constructor() {}

  
  getEvents(): Observable<Event[]> {
    return of(this.events);  
  }


  getEventById(id: number): Observable<Event | undefined> {
    const event = this.events.find(event => event.id === id);
    return of(event);  
  }
}
