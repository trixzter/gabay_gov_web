import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserEventsPageComponent } from './user-events-page/user-events-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { LoginComponent } from './login/login.component';
import { UserEventDetailsPageComponent } from './user-event-details-page/user-event-details-page.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'events',
    component: UserEventsPageComponent
  },
  {
    path: 'about',
    component: AboutUsPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register-page',
    component: RegisterPageComponent
  },
  {
    path: 'organizer/events',
    component: EventsComponent
  },
  {
    path: 'events/:id', 
    component: UserEventDetailsPageComponent
  },
  {
    path: 'organizer/events/new',
    component: CreateEventComponent
  },
  { 
    path: 'organizer/events/update/:id', 
    component: EditEventComponent 
  }, 
  // {
  //    path: 'update-profile', 
  //    component: UpdateProfilePageComponent
  // },
];