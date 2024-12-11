import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import emailjs from "@emailjs/browser";
import {SectionTitleComponent} from "../../reusable/section-title/section-title.component";
import {ButtonComponent} from "../../reusable/buttons/button.component";
import {RecaptchaService} from "../../services/recaptcha.service";

@Component({
  selector: 'contact-me-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SectionTitleComponent,
    ButtonComponent,
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent {
  public readonly formFieldEmail: FormControl;
  public readonly formFieldFirstName: FormControl;
  public readonly formFieldLastName: FormControl;
  public readonly formFieldMessage: FormControl;
  public readonly contactForm: FormGroup;
  public emailSent: boolean = false;
  public errorMessage: string = '';
  private siteKey: string = '6Lf_8X8qAAAAAJOKwSVHx0MyET2NKJ-DLHyvAOIU';

  //Form Builder
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly recaptchaService: RecaptchaService,
  ) {
    this.formFieldEmail = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]);
    this.formFieldFirstName = new FormControl('', [Validators.required, Validators.maxLength(50)]);
    this.formFieldLastName = new FormControl('', [Validators.required, Validators.maxLength(50)]);
    this.formFieldMessage = new FormControl('', [Validators.required, Validators.maxLength(700)]);

    this.contactForm = this.formBuilder.group({
      email: this.formFieldEmail,
      firstName: this.formFieldFirstName,
      lastName: this.formFieldLastName,
      message: this.formFieldMessage
    });
  }

  //Send Email (Submit)
  public async sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm.valid) {
      try {
        const recaptchaToken = await this.executeRecaptcha();

        const formData = new FormData(e.target as HTMLFormElement);
        formData.append('recaptchaToken', recaptchaToken);

        emailjs
          .sendForm('service_kapv13b', 'contact_form', e.target as HTMLFormElement, {
            publicKey: 'gnHtg9FONX5VO5HIC',
          })
          .then(
            () => {
              this.emailSent = true;
              this.errorMessage = '';
              this.contactForm.reset();
            },
            (error) => {
              this.emailSent = false;
              this.errorMessage = 'Failed to send message. Please try again.';
              console.error('Email send failed:', error);
            },
          );
      } catch (error) {
        this.errorMessage = 'Failed to verify reCaptcha. Please try again.';
        console.log('reCaptcha error:', error);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  private executeRecaptcha(): Promise<string> {
    return new Promise((resolve, reject) => {
      const grecaptcha = (window as any).grecaptcha;
      grecaptcha.ready(() => {
        grecaptcha.execute(this.siteKey, {action: 'submit'}).then(
          (token: string) => resolve(token),
          (error: Error) => {
            reject(error);
          }
        );
      })
    })
  }

  public hasError(field: FormControl) {
    return field.invalid && (field.dirty || field.touched);
  }
}
