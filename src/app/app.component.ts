import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { provideRouter, Routes } from '@angular/router';
import { OrganizerNavigationHeaderComponent } from './organizer-navigation-header/organizer-navigation-header.component';
import { UserNavigationHeaderComponent } from './user-navigation-header/user-navigation-header.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { UpdateProfilePageComponent } from './update-profile-page/update-profile-page.component';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
  RouterLink, 
  OrganizerNavigationHeaderComponent, 
  UserNavigationHeaderComponent, 
  UpdateProfilePageComponent, 
  HomeComponent,
  AboutUsPageComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gabay_gov_web';

  constructor() {}
}