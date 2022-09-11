import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { Hopital } from 'src/app/models/Hopital';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { ErrorHandler } from 'src/app/utils/errorHandling';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  latitude = 0;
  longitude = 0;
  map: L.Map
  hopital: Hopital | undefined;
  errorHanlder: ErrorHandler = new ErrorHandler();
  constructor(private activatedRoute: ActivatedRoute, private hopitalService: HospitalsService) {



    this.activatedRoute.params.subscribe(response => {
      this.getHopitalById(response['id'])
    })


  }


  initmap() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      const myIcon = L.icon({
        iconUrl: './../../../assets/marker.png',
        iconSize: [50, 100],
        iconAnchor: [2, 2],
        popupAnchor: [0, -2]
      })

      this.map = L.map('map').setView([this.latitude, this.longitude], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      var marker = L.marker([this.latitude, this.longitude], { icon: myIcon }).addTo(this.map);

    })


  }



  ngOnInit(): void {

    this.initmap();

  }

  getHopitalById(id: number) {
    this.hopitalService.getHopitalById(id)
      .subscribe(response => {
        console.log(response)
        if (response.exceptionMessage == null) {
          this.hopital = response.data;
        }

        else {
          ErrorHandler.errorMessage(response.exceptionMessage);
        }
      })
  }

}
