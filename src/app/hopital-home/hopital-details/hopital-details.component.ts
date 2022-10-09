import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Addresse } from 'src/app/models/Adresse';
import { AddressesService } from 'src/app/services/addresses.service';
import { faDiagramSuccessor, faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged } from 'rxjs'
import { DomSanitizer } from '@angular/platform-browser';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { SucessHandler } from 'src/app/utils/sucessHandling';
import { ErrorHandler } from 'src/app/utils/errorHandling';


@Component({
  selector: 'app-hopital-details',
  templateUrl: './hopital-details.component.html',
  styleUrls: ['./hopital-details.component.css']
})
export class HopitalDetailsComponent implements OnInit {

  searchHopitalForm: FormGroup;
  displayMap: boolean;
  faSearch = faSearch
  canShowMap = false;
  searchUrl = 'https://nominatim.openstreetmap.org/search?street=AUMBC';
  urlSafe: any;

  addressesList: Array<Addresse> = []


  constructor(private addressService: AddressesService,
    private formBuilder: FormBuilder, public sanitizer: DomSanitizer,
    private jwtService: JWTHandlerService, private hopitalService: HospitalsService
  ) {

    this.searchHopitalForm = this.formBuilder.group({
      searchName: ['', Validators.required],
      ville: [],
    })

  }

  ngOnInit(): void {


  }

  rechercher() {
    let searchName = this.searchHopitalForm.get('searchName').value;
    let ville = this.searchHopitalForm.get("ville").value;

    if (ville == undefined) {
      ville = ''
    }
    if (searchName != '') {
      this.canShowMap = true;
      this.searchUrl = `https://nominatim.openstreetmap.org/search?street=${searchName}&city=${ville}`;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.searchUrl);

      this.getPlace(searchName, ville);
    }

  }


  getPlace(searchName: string, ville?: string) {
    this.addressService.getPlaceByName(searchName, ville)
      .subscribe(response => {
        let data = response as unknown as Array<Addresse>
        this.addressesList = data;
      })
  }

  setAddresse(adr: Addresse) {

    let accountID = this.jwtService.getUserId();

    this.hopitalService.getHopitalByUserId(accountID)
      .subscribe(response => {
        this.hopitalService.setHopitalAddresse(response.hopital.id, adr)
          .subscribe(data => {
            if (data.exceptionMessage == null) {
              SucessHandler.successMessage("Addresse définie")
            }
            else {
              ErrorHandler.errorMessage(data.exceptionMessage)
            }
          })
      })

  }

}
