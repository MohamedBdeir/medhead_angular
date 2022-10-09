import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { Recommandation } from 'src/app/models/Recommandation';
import { Specialite } from 'src/app/models/Specialite';
import { AddressesService } from 'src/app/services/addresses.service';
import { RecommandationsService } from 'src/app/services/recommandations.service';
import { SpecialitesService } from 'src/app/services/specialites.service';

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.css']
})
export class RecommandationComponent implements OnInit {


  latitude: number
  longitude: number
  mapLink: any = null
  currentPosition: string;
  faLocation = faLocation;
  isLocationLoading: boolean
  emergencyForm: FormGroup;
  allSpecs: Array<Specialite> = [];
  specOptions: Array<Specialite> = [];

  recommandations: Array<Recommandation> = [];

  constructor(public sanitizer: DomSanitizer, private addresseService: AddressesService,
    private formBuilder: FormBuilder, private specService: SpecialitesService, private recommandationService: RecommandationsService) {

    this.emergencyForm = this.formBuilder.group({
      patient: ['', Validators.required],
      specialite: ['', Validators.required]
    })

    this.getAllSpecs();

    this.emergencyForm.get('specialite')
      .valueChanges.subscribe(response => {
        this.specOptions = this.allSpecs.filter(item => {
          return item.name.includes(response);
        })
      })


    navigator.geolocation.getCurrentPosition((position) => {

      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;




      this.isLocationLoading = true;
      this.addresseService.getAddressByCoordinates(this.latitude, this.longitude)
        .subscribe(response => {

          this.currentPosition = response.display_name

          this.isLocationLoading = false;
        })
    })
  }


  ngOnInit(): void {

  }

  getAllSpecs() {
    this.specService.getSpecialites()
      .subscribe(response => {
        this.allSpecs = response.specialites;
        this.specOptions = this.allSpecs;
      })

  }

  getRecommandations() {

    let latitude = this.latitude.toString();
    let longitude = this.longitude.toString();

    let selectedSpec = this.emergencyForm.get('specialite').value;

    let specID = this.specOptions.find(item => {
      return item.name == selectedSpec
    }).id

    this.recommandationService.getRecommandation(latitude, longitude, specID)
      .subscribe(response => {

        this.recommandations = response.recommandations;

        console.log(this.recommandations);

        let lat = this.recommandations[0].hopital.addresse.lat;
        let lon = this.recommandations[0].hopital.addresse.lon;
        this.mapLink = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${lat},${lon}&hl=fr&z=14&amp&output=embed`)


      })

  }

}
