import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-events-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-events-page.component.html',
  styleUrl: './user-events-page.component.scss'
})
export class UserEventsPageComponent {
user: any;

}
