import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hopital } from 'src/app/models/Hopital';
import { Specialite } from 'src/app/models/Specialite';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';
import { SpecialitesService } from 'src/app/services/specialites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  hopital: Hopital
  specialites: Array<Specialite> = []
  constructor(private hopitalService: HospitalsService, private jwtHandler: JWTHandlerService,
    private specService: SpecialitesService, private router: Router
  ) {

    this.getHopital();

  }

  ngOnInit(): void {
  }


  getHopital() {
    let userID = this.jwtHandler.getUserId();

    this.hopitalService.getHopitalByUserId(userID)
      .subscribe(response => {

        this.hopital = response.hopital;
        console.log(this.hopital)
      })
  }



  navigateToSpecialites() {
    this.router.navigate(['HMenu', "addSpecToHopital"])

  }


  setDetails() {

    if (this.hopital.addresse == null) {
      this.router.navigate(['HMenu', "setDetails"])
    }
    else {
      this.router.navigate(['HMenu', "viewDetails"])
    }
  }

  gestionLits() {
    this.router.navigate(['HMenu', 'lits'])
  }

}
