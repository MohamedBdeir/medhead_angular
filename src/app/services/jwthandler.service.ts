import { Injectable } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class JWTHandlerService {


  rememberMe: boolean
  constructor() { }


  getRememberMe() {
    let value = localStorage.getItem("rememberMe");

    this.rememberMe = value.toLowerCase() === 'true';

  }

  setRememberMe(checked: boolean) {
    localStorage.setItem("rememberMe", checked.toString());
    console.log(localStorage.getItem("rememberMe"));
  }

  saveJwt(token: string) {

    this.getRememberMe();

    if (this.rememberMe) {
      localStorage.setItem("token", token)
    }
    else {
      sessionStorage.setItem("token", token)
    }

  }

  getJwt() {
    this.getRememberMe();

    if (this.rememberMe) {
      return localStorage.getItem("token");
    }
    else {
      return sessionStorage.getItem("token");
    }
  }


  deleteJwt()
  {
    if(this.rememberMe)
    {
      localStorage.removeItem("token");
    }
    else
    {
      sessionStorage.removeItem("token");
    }
  }
}
