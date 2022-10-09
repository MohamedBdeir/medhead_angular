import { ThisReceiver } from '@angular/compiler';
import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Groupe } from 'src/app/models/Groupe';
import { SpecialitesService } from 'src/app/services/specialites.service';
import { ErrorHandler } from 'src/app/utils/errorHandling';
import { SucessHandler } from 'src/app/utils/sucessHandling';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { socketUrl } from 'src/app/services/urls';
import { ValidateAccountComponent } from 'src/app/shared/validate-account/validate-account.component';
import { MatSelectChange } from '@angular/material/select';



@Component({
  selector: 'app-new-spec',
  templateUrl: './new-spec.component.html',
  styleUrls: ['./new-spec.component.css']
})
export class NewSpecComponent implements OnInit, OnDestroy {

  newSpecForm: FormGroup

  groupeOptions: Array<Groupe> = [];

  private stompClient: any = null;


  constructor(private formBuilder: FormBuilder, private specialiteService: SpecialitesService) {

    this.newSpecForm = this.formBuilder.group({
      name: ['', Validators.required],
      groupe: ['', Validators.required]
    })

    this.getGroupes();

  }
  ngOnDestroy(): void {
    this.disconnect();

  }


  groupeSelectionChange(event: MatSelectChange) {
    let selectedGroupe = event.value;

    this.newSpecForm.get('groupe').setValue(selectedGroupe);

  }

  ngOnInit(): void {

    this.connectToSocket();

  }

  addSpecialite() {
    let name = this.newSpecForm.get('name').value;
    let groupeID = this.newSpecForm.get('groupe').value;

    this.specialiteService.addSpecialite(name, groupeID)
      .subscribe(response => {
        if (response.exceptionMessage == null) {
          SucessHandler.successMessage("Ajouté avec succèes")
        }
        else {
          ErrorHandler.errorMessage(response.exceptionMessage);
        }
      })
  }

  getGroupes() {
    this.specialiteService.getAllGroupes().subscribe(response => {
      this.groupeOptions = response.groupes;
    })
  }


  connectToSocket() {
    const socket = new SockJS(socketUrl);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/updateGroups', () => {
        this.getGroupes();
      })
    })
  }


  disconnect() {
    this.stompClient.disconnect();
  }






}
