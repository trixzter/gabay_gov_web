import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EditEventComponent } from './edit-event/edit-event.component';


export const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'create-event',
    component: CreateEventComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'edit-event/:id', component: EditEventComponent 
  }, 
];
