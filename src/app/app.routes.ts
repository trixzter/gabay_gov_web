import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdateProfilePageComponent } from './update-profile-page/update-profile-page.component';
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
    path: 'user-events',
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
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'user-event-details-page/:id', 
    component: UserEventDetailsPageComponent
  },
  {
    path: 'create-event',
    component: CreateEventComponent
  },
  { 
    path: 'edit-event/:id', 
    component: EditEventComponent 
  }, 
  {
    path: 'register',
    component:RegisterPageComponent
  },
  {
     path: 'update-profile', 
     component: UpdateProfilePageComponent
  },
];