import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faLock, faUserPlus, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';
import { ErrorHandler } from 'src/app/utils/errorHandling';
import { SucessHandler } from 'src/app/utils/sucessHandling';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser
  faUserPlus = faUserPlus
  faLock = faLock
  faBuilding = faBuilding
  isLoading: boolean = false;
  loginForm: FormGroup;
  isRememberMeChecked: boolean = false;
  loginError = false;
  loginShowing = true;

  signInForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,
    private jwtHandler: JWTHandlerService, private hopitalService: HospitalsService) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })

    this.signInForm = this.formBuilder.group({
      orgName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],

    })

    this.loginForm.get("username").valueChanges.subscribe(response => {
      if (response.lenght == 0) {
        this.loginError = false;
      }
    })

    this.loginForm.get("password").valueChanges.subscribe(response => {
      if (response.lenght == 0) {
        this.loginError = false;
      }
    })



  }

  ngOnInit(): void {
  }


  login() {

    this.isLoading = true;

    let username = this.loginForm.get("username")?.value;
    let password = this.loginForm.get("password")?.value

    this.authService.authenticate(username, password)
      .subscribe(response => {

        if (response.exceptionMessage == null) {
          this.jwtHandler.setRememberMe(this.isRememberMeChecked);
          this.jwtHandler.saveJwt(response.token);


          let userRole = this.jwtHandler.getAccountType();
          if (userRole === 'ADMIN')
            this.router.navigate(['dashboard'])
          else {
            this.router.navigate(['HMenu'])
          }

        }
        else {
          ErrorHandler.errorMessage(response.exceptionMessage)
          this.loginError = true;
        }

        this.isLoading = false;
      }, error => {
        ErrorHandler.errorMessage(error.statusText)
        this.isLoading = false;
      })


  }

  rememberMe(checked: boolean) {

    this.isRememberMeChecked = checked;
  }

  switchForms() {
    this.loginShowing = !this.loginShowing;
  }

  signIn() {


    this.isLoading = true;
    let orgName = this.signInForm.get("orgName").value;
    let username = this.signInForm.get("username").value;
    let password = this.signInForm.get("password").value;


    this.hopitalService.addOrganization(orgName, username, password)
      .subscribe(response => {
        if (response.exceptionMessage == undefined) {
          SucessHandler.successMessage("Votre demande a été envoyée, elle sera traitée par un administrateur")
          this.isLoading = false
        }
        else {
          ErrorHandler.errorMessage(response.exceptionMessage)
          this.isLoading = false
        }
      })
  }

  urgences() {
    this.router.navigate(['urgences'])
  }

}
