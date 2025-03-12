import { Component } from '@angular/core';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';

@Component({
  selector: 'app-update-profile-page',
  standalone: true,
  imports: [
    OrganizerNavigationHeaderComponent
  ],
  templateUrl: './update-profile-page.component.html',
  styleUrl: './update-profile-page.component.scss'
})
export class UpdateProfilePageComponent {

}
