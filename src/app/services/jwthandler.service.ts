import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTHandlerService {


  rememberMe: boolean
  constructor() { }


  saveJwt(token: string) {

    if(this.rememberMe)
    {
      localStorage.setItem("token", token)
    }
    else
    {
      sessionStorage.setItem("token", token)
    }

  }
}
