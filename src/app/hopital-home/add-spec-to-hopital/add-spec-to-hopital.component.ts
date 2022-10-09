import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Groupe } from 'src/app/models/Groupe';
import { Specialite } from 'src/app/models/Specialite';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';
import { SpecialitesService } from 'src/app/services/specialites.service';
import { SucessHandler } from 'src/app/utils/sucessHandling';
import { ErrorHandler } from 'src/app/utils/errorHandling';
import { socketUrl } from 'src/app/services/urls';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Hopital } from 'src/app/models/Hopital';
@Component({
  selector: 'app-add-spec-to-hopital',
  templateUrl: './add-spec-to-hopital.component.html',
  styleUrls: ['./add-spec-to-hopital.component.css']
})
export class AddSpecToHopitalComponent implements OnInit, OnDestroy {


  addSpecForm: FormGroup
  isAddFormLoading: boolean = false;
  isListSpecsLoading: boolean = false;

  groupesOptions: Array<Groupe> = []
  specialiteOptions: Array<Specialite> = []

  specialitesHopital: Array<Specialite> = []
  selectedSpecID: number


  stompClient: any = null;

  constructor(private formBuilder: FormBuilder, private specService: SpecialitesService,
    private hopitalService: HospitalsService, private jwtHandlerService: JWTHandlerService) {

    this.addSpecForm = this.formBuilder.group({
      groupName: ['', Validators.required],
      specName: ['', Validators.required]
    })

    this.getGroupes();
    this.getListSpec();

  }
  ngOnDestroy(): void {
    this.disconnect();
  }

  ngOnInit(): void {
    this.connectToSocket();
  }

  getGroupes() {

    this.isAddFormLoading = true;
    this.specService.getAllGroupes()
      .subscribe(response => {
        this.groupesOptions = response.groupes;

        this.isAddFormLoading = false;
      })

  }

  getSpecByGroupeID(e: MatSelectChange) {

    let id = e as unknown as number
    this.specService.getSpecialiteByGroupeId(id)
      .subscribe(response => {
        this.specialiteOptions = response.specialites;


      })

  }

  selectSpec(e: MatSelectChange) {

    let value = e as unknown as number
    this.addSpecForm.get("specName")
      .setValue(e);

  }

  addSpec() {

    this.isAddFormLoading = true;
    let specID = this.addSpecForm.get("specName").value;
    console.log({ specID });

    let accountID = this.jwtHandlerService.getUserId();

    this.hopitalService.getHopitalByUserId(accountID)
      .subscribe(response => {
        this.specService.addSpecialiteToHopital(response.hopital.id, specID)
          .subscribe(response => {
            if (response.exceptionMessage == null) {
              SucessHandler.successMessage("Spécialité ajoutée")
            }
            else {
              ErrorHandler.errorMessage(response.exceptionMessage);
            }
            this.isAddFormLoading = false;
          }
          )
      })
  }


  getListSpec() {
    let accountID = this.jwtHandlerService.getUserId();

    this.hopitalService.getHopitalByUserId(accountID)
      .subscribe(response => {
        this.specService.getSpecsByHopitalID(response.hopital.id)
          .subscribe(data => {
            this.specialitesHopital = data.specs;
          })
      })
  }



  connectToSocket() {
    let socket = new SockJS(socketUrl);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe("/topic/updateHospitalSpecList", () => {
        this.getListSpec();
      })
    })

  }


  disconnect() {
    this.stompClient.disconnect();
  }


  deleteSpec(id: number) {
    let accountID = this.jwtHandlerService.getUserId();

    this.hopitalService.getHopitalByUserId(accountID)
      .subscribe(response => {
        this.specService.deleteSpecFromHopital(id, response.hopital.id)
          .subscribe(response => {
            SucessHandler.successMessage("Spécialité retirée")
          })
      })
  }

}
