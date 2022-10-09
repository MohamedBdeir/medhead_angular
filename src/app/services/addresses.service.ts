import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAddressByCoordinates } from '../models/GetAddresseByCoodrinates';
import { GetAddressResposne } from '../models/GetAddressResponse';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {



  constructor(private http: HttpClient) { }

  getPlaceByName(name: string, ville?: string) {


    return this.http.get<GetAddressResposne>(`https://nominatim.openstreetmap.org/search?street=${name}&city=${ville}&format=json`)
  }

  getAddressByCoordinates(lat: number, lon: number) {
    return this.http.get<GetAddressByCoordinates>(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)


  }
}
