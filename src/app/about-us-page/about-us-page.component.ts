import { Component } from '@angular/core';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [UserNavigationHeaderComponent, RouterLink],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}
