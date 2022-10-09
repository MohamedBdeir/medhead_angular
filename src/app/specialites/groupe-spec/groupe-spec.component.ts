import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { SpecialitesService } from 'src/app/services/specialites.service';
import { SucessHandler } from 'src/app/utils/sucessHandling';
import { ErrorHandler } from 'src/app/utils/errorHandling';

@Component({
  selector: 'app-groupe-spec',
  templateUrl: './groupe-spec.component.html',
  styleUrls: ['./groupe-spec.component.css']
})
export class GroupeSpecComponent implements OnInit {


  newGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private specService: SpecialitesService) {

    this.newGroupForm = this.formBuilder.group({
      name: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  ajouter() {
    let name = this.newGroupForm.get('name').value;

    this.specService.addGroupeSpecialite(name)
      .subscribe(response => {
        if (response.exceptionMessage == null)
          SucessHandler.successMessage("Groupe ajouté")

        else {
          ErrorHandler.errorMessage(response.exceptionMessage)
        }
      })
  }

}
