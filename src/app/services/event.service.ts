import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: EventModel[] = [
    {
      id: 1,
      title: 'Awon Alfonso Testing po Gupit Para Sa Kabataan',
      date: '2025-05-20',
      time: '11:00 AM',
      location: 'Bugtong',
      imageUrl: 'LIBRENG-GUPIT.jpg',
      description: "Tuloy lang tuloy lang ang Serbisyo at Suporta natin para sa mga Mag-aaral na KABATAAN na mag babalik Eskwela! Libreng GUPIT! handog sa inyo ng Sangguniang Kabataan!  sa Sampalucan. Siguraduhing kasama ninyo ang inyong mga Magulang. Kita-kits!"
    },
    {
      id: 2,
      title: 'Libresssss Gupit Para Sa Kabataan',
      date: '2025-05-10',
      time: '3:00 AM',
      location: 'Rizalssss',
      imageUrl: 'LIBRENG-GUPIT-2.jpg',
      description: "Libreng gupit nga eh ulit mga suki! pagupit na kayo libre lahat to support the youth of today. Kita kits sa ating Barangay Hall. "
    },
    {
      id: 3,
      title: 'Testing data',
      date: '2025-05-12',
      time: '4:00 AM',
      location: 'Rosario',
      imageUrl: 'LIBRENG-GUPIT-2.jpg',
      description: "Testing testing. "
    },
  ];

  constructor() {}

  
  getEvents(): Observable<EventModel[]> {
    return of(this.events);  
  }


  getEventById(id: number): Observable<EventModel | undefined> {
    const event = this.events.find(event => event.id === id);
    return of(event);  
  }
}
