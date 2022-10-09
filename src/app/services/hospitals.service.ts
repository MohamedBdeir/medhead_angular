import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BaseEvent from 'ol/events/Event';
import { User } from 'src/data';
import { Addresse } from '../models/Adresse';
import { BaseResponse } from '../models/BaseResponse';
import { CountInvalidResponse } from '../models/CountInvalidAccountsResponse';
import { GetAllHopitalResponse } from '../models/GetAllHopitalResponse';
import { GetHopitalById } from '../models/GetHopitalById';
import { GetHopitalByUserIDResponse } from '../models/GetHopitalByUserIDResponse';
import { InvalidAccountsResponse } from '../models/InvalidAccountsResponse';
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

  addOrganization(orgName: string, username: string, password: string) {
    let url = baseUrl + "addOrg";
    return this.httpClient.post<BaseResponse>(url, {
      orgName: orgName,
      username: username,
      password: password
    })
  }

  countInvalidAccounts() //un compte non valid equivaut a une demande d'ajout pas encore acceptee
  {
    let url = baseUrl + "countInvalid"
    return this.httpClient.get<CountInvalidResponse>(url, { withCredentials: true });
  }

  getInvalidAccounts() {
    let url = baseUrl + "getInvalidAccounts";
    return this.httpClient.get<InvalidAccountsResponse>(url, { withCredentials: true });
  }

  validateAccount(id: number) {
    let url = baseUrl + "validateAccount";
    return this.httpClient.put<BaseResponse>(url, {
      accountId: id
    }, { withCredentials: true })
  }

  getHopitalByUserId(id: number) {
    let url = baseUrl + "getHopitalByUserID";
    return this.httpClient.post<GetHopitalByUserIDResponse>(url, {
      userId: id
    }, {
      withCredentials: true
    })
  }

  setHopitalAddresse(hopitalID: number, addresse: Addresse) {
    let url = baseUrl + "setHopitalAddresse";

    return this.httpClient.post<BaseResponse>(url, {
      addresse: addresse,
      idHopital: hopitalID
    }, { withCredentials: true })

  }
}
