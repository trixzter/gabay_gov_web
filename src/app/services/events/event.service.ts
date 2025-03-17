import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel } from '../../models/event.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BASE_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: EventModel[] = [];

  constructor(private http: HttpClient) {}

  createEvent(event: EventModel): Observable<any> {
    return this.http.post(`${BASE_URL}/events`, event);
  }

  getAllEvents(title?: string, location?: string): Observable<EventModel[]> {
    let params = new HttpParams();
    if (title) {
      params = params.set('title', title);
    }
    if (location) {
      params = params.set('location', location);
    }
    return this.http.get<EventModel[]>(`${BASE_URL}/events`, { params });
  }

  getEvent(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${BASE_URL}/events/${id}`);
  }

  updateEvent(id: number, event: EventModel): Observable<any> {
    return this.http.put(`${BASE_URL}/events/${id}`, event);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/events/${id}`);
  }
}
