import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private http = inject(HttpClient);
  private router = inject(Router);
  isSubmitting = false;
  errorMessage = '';

  onSubmit(form: NgForm) {
    if (!form || form.invalid || this.isSubmitting) return;
    this.errorMessage = '';
    this.isSubmitting = true;
    const { userName, password } = form.value || {};

    this.http.get<any>('https://dummyjson.com/users').subscribe({
      next: (res) => {
        const users = res?.users ?? [];
        const match = users.find((u: any) => u?.username === userName && u?.password === password);
        if (match) {
          localStorage.setItem('auth', JSON.stringify({ auth: true }));
          this.router.navigate(['/ProductList']);
          form.resetForm();
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      error: () => {
        this.errorMessage = 'Login service unavailable. Please try again later.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
