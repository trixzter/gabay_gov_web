import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EmailSubscriptionService } from '../services/email-subscription/email-subscription.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    UserNavigationHeaderComponent,
    FooterComponent
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
})
export class AboutUsPageComponent {
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
          this.message = res?.Success || 'Subscription successful!';
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
