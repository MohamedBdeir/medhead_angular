import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Hopital } from 'src/app/models/Hopital';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';

@Component({
  selector: 'app-confirmed-details',
  templateUrl: './confirmed-details.component.html',
  styleUrls: ['./confirmed-details.component.css']
})
export class ConfirmedDetailsComponent implements OnInit {


  hopital: Hopital;
  mapLink: any = null
  constructor(private hopitalService: HospitalsService, private jwtService: JWTHandlerService,
    public sanitizer: DomSanitizer) {

    this.getHopital();

  }

  ngOnInit(): void {
  }


  getHopital() {

    let accountID = this.jwtService.getUserId();

    this.hopitalService.getHopitalByUserId(accountID)
      .subscribe(response => {
        this.hopital = response.hopital
        this.mapLink = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${response.hopital.addresse.lat},${response.hopital.addresse.lon}&hl=fr&z=14&amp&output=embed`)
      })



  }

}
