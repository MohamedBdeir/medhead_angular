import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Specialite } from 'src/app/models/Specialite';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';
import { LitsService } from 'src/app/services/lits.service';
import { SpecialitesService } from 'src/app/services/specialites.service';
import { SucessHandler } from 'src/app/utils/sucessHandling';
import { ErrorHandler } from 'src/app/utils/errorHandling';
import { map, debounceTime, distinctUntilChanged } from 'rxjs'
import { Lit } from 'src/app/models/Lit';
@Component({
  selector: 'app-lits',
  templateUrl: './lits.component.html',
  styleUrls: ['./lits.component.css']
})
export class LitsComponent implements OnInit {


  isLoading: boolean = false;
  isBedLoading: boolean = false;
  addBedForm: FormGroup;
  litsLibreBySpecCount: number = 0;
  totalLitsByHopital: number = 0;


  getBedForm: FormGroup;

  lits: Array<Lit> = [];
  allSpecialites: Array<Specialite> = [];
  specOptions: Array<Specialite> = [];
  constructor(private specService: SpecialitesService, private formBuider: FormBuilder,
    private jwtHandler: JWTHandlerService,
    private hopitalService: HospitalsService, private litService: LitsService) {

    this.addBedForm = this.formBuider.group({
      specialite: ["", Validators.required],
      nombre: ['', Validators.required]
    })

    this.getBedForm = this.formBuider.group({
      spec: ['', Validators.required]
    })

    this.addBedForm.get('specialite').valueChanges.subscribe(response => {
      this.specOptions = this.allSpecialites.filter(item => {
        return item.name.includes(response);
      })
    })


    this.getBedForm.get("spec").valueChanges.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(response => {
        this.specOptions = this.allSpecialites.filter(item => {
          return item.name.includes(response);
        })

      })
    this.getSpec();
  }

  ngOnInit(): void {
  }

  getSpec() {
    this.isLoading = true;
    this.specService.getSpecialites()
      .subscribe(response => {
        this.allSpecialites = response.specialites;
        this.specOptions = this.allSpecialites
        this.isLoading = false;

      });
  }

  specSelectionChange(event: MatSelectChange) {
    let value = event as unknown as number;
    this.addBedForm.get("specialite").setValue(value);

  }

  bedSpecSelectionChange(event: MatSelectChange) {
    let value = event as unknown as number;
    this.getBedForm.get("spec").setValue(value);
    this.getListBySpecAndHopital();

  }


  addLit() {
    let specName = this.addBedForm.get("specialite").value;

    let specID = this.getSpecIDFromName(specName);


    let nombre = this.addBedForm.get("nombre").value;
    let accountID = this.jwtHandler.getUserId();

    this.hopitalService.getHopitalByUserId(accountID)
      .subscribe(response => {
        this.litService.addLit(specID, response.hopital.id, nombre)
          .subscribe(data => {
            if (data.exceptionMessage == null) {
              SucessHandler.successMessage("Lits ajoutés");
            }
            if (data.exceptionMessage != null && data.newAuthenticationToken != null) {
              ErrorHandler.errorMessage(response.exceptionMessage);
            }
          })
      })

  }

  getListBySpecAndHopital() {
    this.isBedLoading = true;

    let accountID = this.jwtHandler.getUserId();

    //TO UPDATE

    let specName = this.getBedForm.get("spec").value;
    let specID = this.getSpecIDFromName(specName);


    this.hopitalService.getHopitalByUserId(accountID)
      .subscribe(response => {
        this.litService.getLitBySpecAndHopital(response.hopital.id, specID)
          .subscribe(data => {
            this.lits = data.lits;
            console.log(this.lits);
            this.countDisponible();
          })
      })

  }

  countDisponible() {
    let data = this.lits.filter(item => {
      return item.libre
    })

    this.litsLibreBySpecCount = data.length;
  }


  getSpecIDFromName(value: string): number {

    console.log(value);

    var spec = this.allSpecialites.find(item => {
      return item.name === value
    })


    return spec.id
  }




}
