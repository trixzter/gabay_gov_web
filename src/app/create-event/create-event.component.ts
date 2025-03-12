import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrganizerNavigationHeaderComponent } from '../organizer-navigation-header/organizer-navigation-header.component';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [RouterLink,
    OrganizerNavigationHeaderComponent
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {

}
