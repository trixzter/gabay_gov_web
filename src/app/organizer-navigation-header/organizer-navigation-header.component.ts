import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizer-navigation-header',
  standalone: true,
  imports: [
    RouterLink, 
    CommonModule
  ],
  templateUrl: './organizer-navigation-header.component.html',
  styleUrl: './organizer-navigation-header.component.scss'
})
export class OrganizerNavigationHeaderComponent {
  isDropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown toggled:', this.isDropdownOpen);
  }

  logout() {
    console.log('User logged out');
    this.router.navigate(['/']); 
  }
}

