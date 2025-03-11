import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrganizerNavigationHeaderComponent } from './organizer-navigation-header/organizer-navigation-header.component';
import { UserNavigationHeaderComponent } from './user-navigation-header/user-navigation-header.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, OrganizerNavigationHeaderComponent, UserNavigationHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gabay_gov_web';
}