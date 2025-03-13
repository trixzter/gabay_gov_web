import { Component, OnInit } from '@angular/core';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { EventModel } from '../models/event.model';
import { EventService } from '../services/events/event.service';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// BrowserModule,
@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [OrganizerNavigationHeaderComponent,FormsModule, RouterLink],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
})
export class CreateEventComponent implements OnInit{
  eventModel: EventModel = {
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    imageUrl: '',
    published: false,
  };
  submitted = false;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    
  }

  saveEvent(): void {
    const data = {
      title: this.eventModel.title,
      date: this.eventModel.date,
      time: this.eventModel.time,
      location: this.eventModel.location,
      description: this.eventModel.description,
      photo: this.eventModel.imageUrl || ' ',
    };

  this.eventService.createEvent(data).subscribe({
    next: (response) => {
      console.log(response);
      this.submitted = true;
    },
    error: (error: any) => {
      console.log(error);
    }
  });
}

  newEvent(): void {
    this.submitted = false;
    this.eventModel = {
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      imageUrl: '',
      published: false,
    };
  }
}