import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.scss'
})
export class EditEventComponent {
  // not sure pa po here if correct
  isDeletePopupVisible = false; 

  showDeleteConfirmation() {
    this.isDeletePopupVisible = true; 
  }
  hideDeleteConfirmation() {
    this.isDeletePopupVisible = false; 
  }
  deleteEvent() {
    alert("Event deleted successfully!");
    this.isDeletePopupVisible = false; 
  }
}
