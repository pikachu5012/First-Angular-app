import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
//Day4 Task
export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authData = localStorage.getItem('auth');

  if (authData) {
    try {
      const auth = JSON.parse(authData);
      if (auth.auth === false) {
        return true;
      }
    } catch (e) {
    }
  }
  router.navigate(['/login']);
  return false;
};
