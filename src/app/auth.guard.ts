import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('auth guard')
  if (localStorage.getItem('user'))
    return true;
  else{
    alert('Login First');
    return false;
  }
};
