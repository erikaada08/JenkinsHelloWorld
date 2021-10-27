import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

authenticate(username: any, password: any){
if(username ==="erika" && password==='dummy'){
  sessionStorage.setItem('authenticateUser', username);
  return true;
}
 return false;
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticateUser')
  return !(user === null)
}

}
