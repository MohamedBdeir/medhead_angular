import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorHandler } from 'src/app/utils/errorHandling';
import { SucessHandler } from 'src/app/utils/sucessHandling';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { User } from 'src/data';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { socketUrl } from 'src/app/services/urls';

@Component({
  selector: 'app-validate-account',
  templateUrl: './validate-account.component.html',
  styleUrls: ['./validate-account.component.css']
})
export class ValidateAccountComponent implements OnInit, OnDestroy {

  invalidUsers: Array<User> = [];
  private stompClient: any = null;

  constructor(private hopitalService: HospitalsService) {

    this.getInvalidAccounts();
  }

  ngOnDestroy(): void {

    this.disconnect();
  }

  getInvalidAccounts() {
    this.hopitalService.getInvalidAccounts()
      .subscribe(response => {

        this.invalidUsers = response.invalidUsers
        console.log({ response })
      })
  }

  valider(accoutnId: number) {
    this.hopitalService.validateAccount(accoutnId)
      .subscribe(response => {
        if (response.exceptionMessage != null) {
          ErrorHandler.errorMessage(response.exceptionMessage);
        }
        else {
          SucessHandler.successMessage("Le compte a été validé")
        }
      })
  }

  ngOnInit(): void {

    this.connectToSocket();

  }

  connectToSocket() {
    const socket = new SockJS(socketUrl);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe("/topic/updateInvalidCount", () => {
        this.getInvalidAccounts();
      })
    })

  }

  disconnect() {
    this.stompClient.disconnect();
  }

}
