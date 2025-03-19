import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-navigation-header',
  standalone: true,
  imports: [ 
    RouterLink, 
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './user-navigation-header.component.html',
  styleUrl: './user-navigation-header.component.scss'
})
export class UserNavigationHeaderComponent {
  title: string = '';
  location: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.title || this.location) {
      this.router.navigate(['/user-events'], {
        queryParams: { title: this.title, location: this.location }
      });
    }
  }
}
