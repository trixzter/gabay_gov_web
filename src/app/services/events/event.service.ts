import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel } from '../../models/event.model';
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:5000';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: EventModel[] = [];

  constructor(private http: HttpClient) {}

  createEvent(event: EventModel): Observable<any> {
    return this.http.post(`${baseUrl}/events/`, event);
  }

  getAllEvents(title?: string, location?: string): Observable<EventModel[]> {
    let params = new HttpParams();
    if (title) {
      params = params.set('title', title);
    }
    if (location) {
      params = params.set('location', location);
    }
    return this.http.get<EventModel[]>(`${baseUrl}/events`, { params });
  }

  getEvent(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${baseUrl}/events/${id}`);
  }

  updateEvent(id: number, event: EventModel): Observable<any> {
    return this.http.put(`${baseUrl}/events/${id}`, event);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/events/${id}`);
  }

  getEvents(): Observable<EventModel[]> {
    return of(this.events);
  }

  getLocalEventById(id: number): Observable<EventModel | undefined> {
    const event = this.events.find((event) => event.id === id);
    return of(event);
  }
}
