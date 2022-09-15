import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllHopitalResponse } from '../models/GetAllHopitalResponse';
import { GetHopitalById } from '../models/GetHopitalById';
import { baseUrl } from './urls'
@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor(private httpClient: HttpClient) { }


  getAllHopital() {
    let url = baseUrl + 'getAllHopital';

    return this.httpClient.get<GetAllHopitalResponse>(url, { withCredentials: true })

  }

  getHopitalById(id: number) {
    let url = baseUrl + "getHopitalById";
    return this.httpClient.post<GetHopitalById>(url, { id: id }, { withCredentials: true });
  }
}
