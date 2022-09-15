import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faLock, faUserPlus, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { JWTHandlerService } from 'src/app/services/jwthandler.service';
import { ErrorHandler } from 'src/app/utils/errorHandling';
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

  loginForm: FormGroup;
  isRememberMeChecked: boolean = false;
  loginError = false;
  loginShowing = true;

  signInForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,
    private jwtHandler: JWTHandlerService) {

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


    let username = this.loginForm.get("username")?.value;
    let password = this.loginForm.get("password")?.value

    this.authService.authenticate(username, password)
      .subscribe(response => {

        if (response.exceptionMessage == null) {
          this.jwtHandler.setRememberMe(this.isRememberMeChecked);
          this.jwtHandler.saveJwt(response.token);



          this.router.navigate(['dashboard'])

        }
        else {
          ErrorHandler.errorMessage(response.exceptionMessage)
          this.loginError = true;
        }
      }, error => {
        alert(error.statusText)
      })


  }

  rememberMe(checked: boolean) {

    this.isRememberMeChecked = checked;
  }

  switchForms() {
    this.loginShowing = !this.loginShowing;
  }

  signIn() { }

}
