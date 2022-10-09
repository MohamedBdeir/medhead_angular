import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetRecommandationResponse } from '../models/GetRecommandationResponse';
import { baseUrl } from './urls';

@Injectable({
  providedIn: 'root'
})
export class RecommandationsService {

  constructor(private httpClient: HttpClient) { }


  getRecommandation(lattitude: string, longitude: string, specID: number) {
    let url = baseUrl + 'getRecommandations'
    return this.httpClient.post<GetRecommandationResponse>(url,
      { specID: specID, latitude: lattitude, longitude: longitude })
  }
}
