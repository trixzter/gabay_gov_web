import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel } from '../../models/event.model';
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  
  private events: EventModel[] = [];
  
    constructor(private http: HttpClient) { }

    create(event: EventModel): Observable<any> {
      return this.http.post(`{baseUrl}/events`, event);
    }

    getAll(title?:string, location?:string): Observable<EventModel[]> {
      let params = new HttpParams();
      if (title) {
        params = params.set('title', title);
      }
      if (location) {
        params = params.set('location', location);
      }
      return this.http.get<EventModel[]>(`${baseUrl}/events`, { params });
    }

    get(id: number): Observable<EventModel> {
      return this.http.get<EventModel>(`${baseUrl}/events/${id}`); //////
    }
  
    update(id: number, event: EventModel): Observable<any> {
      return this.http.put(`${baseUrl}/events/${id}`, event);
    }
  
    delete(id: number): Observable<any> {
      return this.http.delete(`${baseUrl}/events/${id}`);
    }

  getEvents(): Observable<EventModel[]> {
    return of(this.events);  
  }

  getEventById(id: number): Observable<EventModel | undefined> {
    const event = this.events.find(event => event.id === id);
    return of(event);  
  }
}
