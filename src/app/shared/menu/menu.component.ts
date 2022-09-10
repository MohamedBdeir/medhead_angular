import { Component, OnInit } from '@angular/core';
import { faHome, faHospitalAlt, faHeartbeat, faUser } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
