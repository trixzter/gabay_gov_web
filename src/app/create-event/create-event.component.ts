import { Component, OnInit } from '@angular/core';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';
import { EventService } from '../services/events/event.service';
import { EventModel } from '../models/event.model';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    OrganizerNavigationHeaderComponent, 
    FormsModule,
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
})
export class CreateEventComponent implements OnInit{
  eventModel: EventModel = {} as EventModel;
  submitted = false;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    
  }

  saveEvent(): void {
    const eventModel = {
      title: this.eventModel.title,
      date: this.eventModel.date,
      time: this.eventModel.time,
      location: this.eventModel.location,
      description: this.eventModel.description,
      photo: this.eventModel.photo || ' ',
    };

  this.eventService.createEvent(eventModel).subscribe({
    next: (response) => {
      console.log(response);
      this.submitted = true;
      this.router.navigate(['/events'])
    },
    error: (error: any) => {
      console.log(error);
    }
  });
  }
}