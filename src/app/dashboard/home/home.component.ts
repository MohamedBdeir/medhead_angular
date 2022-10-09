import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { socketUrl } from 'src/app/services/urls';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {


  private stompClient: any = null;
  invalidCount: number;
  constructor(private router: Router, private hopitalService: HospitalsService,
    private jwtService: JWTHandlerService) {


    this.countInvalid();


  }
  ngOnDestroy(): void {
    this.disconnect();
  }

  ngOnInit(): void {
    this.connectToSocket();
  }


  connectToSocket()
  {
    const socket = new SockJS(socketUrl);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe("/topic/updateInvalidCount", () => {
        this.countInvalid();
      })
    })
  }

  disconnect()
  {
      this.stompClient.disconnect();

  }

  navigateToHospitals() {
    this.router.navigate(['hospitals'])
  }

  countInvalid() {
    this.hopitalService.countInvalidAccounts()
      .subscribe(response => {
        this.invalidCount = response.invalidCount

        console.log(this.invalidCount)
      })
  }

  navigateToSpecialites() {
    this.router.navigate(['specialites']);
  }

}
