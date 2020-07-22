import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  emailErrorMessage: string;
  subscriptionErrorMessage: string;

  subscribeForm = this.fb.group({
    email: ['', Validators.email],
    subscription: this.fb.group({
      type: ['', Validators.required]
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscribeForm.get('email').valueChanges.subscribe(() => {
      if (this.subscribeForm.get('email').valid) {
        this.emailErrorMessage = null;
      }

      else if (this.subscribeForm.get('email').value === '') {
        this.emailErrorMessage = 'Please enter email address';
      }

      else if (this.subscribeForm.get('email').invalid) {
        this.emailErrorMessage = 'Please enter valid email address';
      }
    });

    this.subscribeForm.get('subscription').valueChanges.subscribe(() => {
      this.subscriptionErrorMessage = null;
    });
  }

  onSubmit() {
    this.validateOnSubmit(this.subscribeForm);

    (this.subscribeForm.valid) ? alert('Success') : console.log(this.subscribeForm);
  }

  validateOnSubmit(formGroup: FormGroup) {
    for (const name in formGroup.controls) {
      const control: FormControl | FormGroup = formGroup.controls[ name ] as FormControl | FormGroup;

      if (name === 'email' && control.invalid) {
        this.emailErrorMessage = 'Please enter valid email address';
        control.markAsDirty();

        if (control.untouched || control.value.length < 1) {
          this.emailErrorMessage = 'Please enter email address';
          control.markAsDirty();
        }
      }

      else if (name === 'subscription' && control.invalid) {
        this.subscriptionErrorMessage = 'Please select a subscription';
        control.markAsDirty();
      }
    }
  }

}
