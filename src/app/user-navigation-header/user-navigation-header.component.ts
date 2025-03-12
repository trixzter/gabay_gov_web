import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-navigation-header',
  standalone: true,
  imports: [ RouterLink, RouterModule],
  templateUrl: './user-navigation-header.component.html',
  styleUrl: './user-navigation-header.component.scss'
})
export class UserNavigationHeaderComponent {

}
