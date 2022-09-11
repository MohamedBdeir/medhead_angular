import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { users } from 'src/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isRememberMeChecked: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })



  }

  ngOnInit(): void {
  }


  login() {


    let username = this.loginForm.get("username")?.value;
    let password = this.loginForm.get("password")?.value

    this.authService.authenticate(username, password)
      .subscribe(response => {
        console.log(response);
      })


  }

  rememberMe(checked: boolean) {

    this.isRememberMeChecked = checked;
  }

}
