import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/BaseResponse';
import { GetAllGroupesResponse } from '../models/GetAllGroupesResponse';
import { GetAllSpecialiteResponse } from '../models/GetAllSpecialiteResponse';
import { GetSpecByGroupeIdResponse } from '../models/GetSpecByGroupeIdResponse';
import { GetSpecsByHopitalIDResponse } from '../models/GetSpecsByHopitalIDResponse';
import { Groupe } from '../models/Groupe';
import { baseUrl } from './urls'


@Injectable({
  providedIn: 'root'
})
export class SpecialitesService {

  constructor(private http: HttpClient) { }


  addSpecialite(name: String, groupeID: number) {
    let url = baseUrl + "addSpecialite";

    return this.http.post<BaseResponse>(url, {
      name: name,
      groupeID: groupeID
    }, { withCredentials: true })
  }

  getSpecialites() {
    let url = baseUrl + 'getAllSpecialites';
    return this.http.get<GetAllSpecialiteResponse>(url, { withCredentials: true })

  }

  addGroupeSpecialite(name: String) {
    let url = baseUrl + 'addGroupeSpec';
    return this.http.post<BaseResponse>(url, {
      name: name
    },
      {
        withCredentials: true
      })
  }

  getAllGroupes() {
    let url = baseUrl + "getAllGroupes";

    return this.http.get<GetAllGroupesResponse>(url, { withCredentials: true })
  }

  getSpecialiteByGroupeId(id: number) {
    let url = baseUrl + 'getSpecByGroupId';

    return this.http.post<GetSpecByGroupeIdResponse>(url, {
      groupeID: id
    }, { withCredentials: true })
  }

  addSpecialiteToHopital(hopitalId: number, specID: number) {
    let url = baseUrl + 'addSpecialiteToHopital';

    return this.http.post<BaseResponse>(url, {
      specialiteID: specID,
      hopitalID: hopitalId
    }, { withCredentials: true })
  }

  getSpecsByHopitalID(hopitalID: number) {
    let url = baseUrl + "getSpecByHopitalID";

    return this.http.post<GetSpecsByHopitalIDResponse>(url, {
      hopitalID: hopitalID
    }, {
      withCredentials: true
    })
  }

  deleteSpecFromHopital(specID: number, hopitalID: number) {
    let url = baseUrl + "deleteSpecFromHopital";

    return this.http.post<BaseResponse>(url, {
      specID: specID, hopitalID: hopitalID
    }, { withCredentials: true })
  }
}
