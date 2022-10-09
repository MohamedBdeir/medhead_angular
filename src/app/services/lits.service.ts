import { HttpClient } from '@angular/common/http';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/BaseResponse';
import { CountLitByHopitalResponse } from '../models/CountLitByHopitalResponse';
import { GetLitBySpecAndHopital } from '../models/GetLitBySpecAndHopital';
import { baseUrl } from './urls';

@Injectable({
  providedIn: 'root'
})
export class LitsService {

  constructor(private httpClient: HttpClient) { }


  addLit(specID: number, hopitalID: number, nombre: number) {
    let url = baseUrl + "addLit";
    return this.httpClient.post<BaseResponse>(url, {
      hopitalID: hopitalID,
      specialiteID: specID,
      nombre: nombre,
      libre: true //le lit est libre lors de l'ajout

    }, { withCredentials: true })
  }

  getLitBySpecAndHopital(hopitalID: number, specID: number) {
    let url = baseUrl + 'getLitsBySpecAndHopital'

    return this.httpClient.post<GetLitBySpecAndHopital>(url, {
      specID: specID,
      hopitalID: hopitalID
    },
      {
        withCredentials: true
      })
  }

  countLitByHopital(id: number)
  {
    let url =  baseUrl+"countLitByHopital";
    return this.httpClient.post<CountLitByHopitalResponse>(url, {
      hopitaID: id
    }, 
    {
      withCredentials: true
    })
    
    
  }
}
