import { CanActivateFn, Router } from '@angular/router';

//const _Router = new Router();

export const authGuard: CanActivateFn = (route, state) => {
  


  if (localStorage.getItem("userToken")) 
    return true;

  // _Router.navigate(['/login']);

  return false;
};

