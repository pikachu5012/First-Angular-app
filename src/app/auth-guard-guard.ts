import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
//Day4 Task
export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authed = localStorage.getItem('auth');
  if (authed) {
      const auth = JSON.parse(authed);
      if (auth.auth === true) {
        return true;
      }
    }
  router.navigate(['/login']);
  return false;
};
