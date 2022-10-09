import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faHospitalAlt, faHeartbeat, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faHome = faHome
  faHospitalAlt = faHospitalAlt
  faHeartbeat = faHeartbeat
  faUser = faUser
  faSignOut = faSignOut
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }


  navigateToDashboard() {
    this.router.navigate(['dashboard'])
  }

  logout() {
    this.authService.logout();
    this.router.navigate([''])
  }

}
