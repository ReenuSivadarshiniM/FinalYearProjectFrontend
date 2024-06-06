import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  console.log("am inside with guard");
let user=localStorage.getItem("customerEmail");
console.log(user);
let userObj;
if(user!=null){
  userObj=JSON.parse(user);
//   if( userObj.role=="user")
// //  console.log(userObj);
return true;
}
// if(userObj.)
inject(Router).navigateByUrl("/login");

  return false;
};
