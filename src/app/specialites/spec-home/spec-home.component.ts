import { Component, OnInit, OnDestroy } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Groupe } from 'src/app/models/Groupe';
import { Specialite } from 'src/app/models/Specialite';
import { SpecialitesService } from 'src/app/services/specialites.service';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { socketUrl } from 'src/app/services/urls';
@Component({
  selector: 'app-spec-home',
  templateUrl: './spec-home.component.html',
  styleUrls: ['./spec-home.component.css']
})
export class SpecHomeComponent implements OnInit, OnDestroy {

  groupes: Array<Groupe> = [];
  specialites: Array<Specialite> = [];
  currentlySelectedGroupeID: number = 0;
  isLoading: boolean = true;

  private stompClient: any = null;

  constructor(private specService: SpecialitesService) {

    this.getAllGroupes();


  }
  ngOnDestroy(): void {
    this.disconnect();
  }

  ngOnInit(): void {
    this.connectToSocket();
  }

  connectToSocket()
  {
    let socket = new SockJS(socketUrl);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe("/topic/updateGroups", () => {
        this.getAllGroupes();
      })
    })

  }

  disconnect()
  {
    this.stompClient.disconnect();
  }

  getAllGroupes() {
    this.isLoading = true
    this.specService.getAllGroupes()
      .subscribe(response => {
        this.groupes = response.groupes
        this.currentlySelectedGroupeID = this.groupes[0].groupeID
        this.isLoading = false;
        console.log(this.groupes);
      })
  }


  selectGroupe(id: number) {

    let currentSelection = document.getElementById(this.currentlySelectedGroupeID.toString());

    if (currentSelection != undefined) {
      currentSelection.classList.remove("selectedGroup")
    }


    let newSelection = document.getElementById(id.toString());
    newSelection.classList.add("selectedGroup");

    this.currentlySelectedGroupeID = id

    this.getSpecialitesByGroupId(id);
  }


  getSpecialitesByGroupId(id: number)
  {
    this.specService.getSpecialiteByGroupeId(id)
    .subscribe(response => {
      this.specialites = response.specialites;
    })
  }



}
