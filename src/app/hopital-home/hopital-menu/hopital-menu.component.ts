import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faHospitalAlt, faHeartbeat, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Hopital } from 'src/app/models/Hopital';
import { AuthService } from 'src/app/services/auth.service';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';


@Component({
  selector: 'app-hopital-menu',
  templateUrl: './hopital-menu.component.html',
  styleUrls: ['./hopital-menu.component.css']
})
export class HopitalMenuComponent implements OnInit {


  faHome = faHome
  faHospitalAlt = faHospitalAlt
  faHeartbeat = faHeartbeat
  faUser = faUser
  faSignOut = faSignOut
  hopital: Hopital;
  constructor(private router: Router, private authService: AuthService,
    private hopitalService: HospitalsService, private jwtService: JWTHandlerService) {

      this.getHopistalName();

     }

  ngOnInit(): void {
  }


  navigateToDashboard() {
    this.router.navigate(['HMenu', ])
  }

  navigateToSpecialites()
  {
    this.router.navigate(['HMenu', "addSpecToHopital"])
  }

  logout() {
    this.authService.logout();
    this.router.navigate([''])
  }

  getHopistalName() {


    let userID = this.jwtService.getUserId();

    this.hopitalService.getHopitalByUserId(userID)
    .subscribe(response => {
        this.hopital = response.hopital
    })

  }

}