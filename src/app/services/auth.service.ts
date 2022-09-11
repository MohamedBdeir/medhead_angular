import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateResponse } from '../models/AuthenticateResponse';
import { baseUrl } from './urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  authenticate(username: string, password: string) {
    let url = baseUrl;

    return this.httpClient.post<AuthenticateResponse>(url + 'authenticate', {
      username: username,
      password: password
    })
  }
}
