import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  form: FormGroup;
  savedUsers: { firstName: string; lastName: string; email: string; imageUrl: string }[] = [];

  constructor(private f: FormBuilder) {
    this.form = this.f.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lastName: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    this.savedUsers.push(this.form.getRawValue());
    this.form.reset();
  }
}
