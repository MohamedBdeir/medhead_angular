import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hopital } from 'src/app/models/Hopital';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { ErrorHandler } from 'src/app/utils/errorHandling';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  hospitals: Array<Hopital> = []
  errorHandler: ErrorHandler = new ErrorHandler();

  constructor(private hospitalService: HospitalsService, private router: Router) {

    this.getAllHopital();

  }

  ngOnInit(): void {
  }

  getAllHopital() {

    this.hospitalService.getAllHopital()
      .subscribe(response => {
        if (response.exceptionMessage == null) {
          this.hospitals = response.data;
        }
        else {
          this.errorHandler.errorMessage(response.exceptionMessage);
        }
      })
  }

  navigateToDetails(id: number) {

    this.router.navigate(['hospitals', id.toString()])

  }

}
