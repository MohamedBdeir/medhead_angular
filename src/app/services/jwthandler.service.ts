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

    if (value)
      this.rememberMe = value.toLowerCase() === 'true';

  }

  setRememberMe(checked: boolean) {
    localStorage.setItem("rememberMe", checked.toString());
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


  deleteJwt() {
    if (this.rememberMe) {
      localStorage.removeItem("token");
    }
    else {
      sessionStorage.removeItem("token");
    }
  }

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  isTokenExpired() {
    const token = this.getJwt();
    const parsed = this.parseJwt(token + "");
    const tokenExpiryDate = parsed.exp;

    const now = Date.now() / 1000;

    return (tokenExpiryDate <= now);
  }


  getUserName() {

    let tokenFromStorage = this.getJwt() + ""
    return this.parseJwt(tokenFromStorage).username;
  }

  getUserId() {
    let tokenFromStorage = this.getJwt() + ""
    return this.parseJwt(tokenFromStorage).userID
  }

  getAccountType() {
    let tokenFromStorage = this.getJwt() + ""
    return this.parseJwt(tokenFromStorage).accountType;
  }


}
