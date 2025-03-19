import { Component } from '@angular/core';
import { EmailSubscriptionService } from '../services/email-subscription/email-subscription.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  emailForm: FormGroup;
    message: string = '';
    isSubmitting: boolean = false;
  
    constructor(
      private fb: FormBuilder,
      private emailService: EmailSubscriptionService
    ) {
      this.emailForm = this.fb.group({
        subscriber_email: ['', [Validators.required, Validators.email]],
      });
    }
  
    onSubmit() {
      if (this.emailForm.valid) {
        const email = this.emailForm.value.subscriber_email;
        this.emailService.addEmail(email).subscribe({
          next: (res) => {
            this.message = 'Subscription successful!!';
            this.emailForm.reset(); 
          },
          error: (err) => {
            console.error('Subscription Error:', err); 
            this.message =
              err?.error?.Error || 'Something went wrong. Try again!';
          },
        });
      }
    }
  }

