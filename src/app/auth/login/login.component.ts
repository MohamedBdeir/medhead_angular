import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private router: Router) {

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

    let user = users.find(item => {
      return item.username === username
    });




    if (!user) {

      alert("Nom d'utlisateur incorret");
    }
    else if (user.password !== password) {

      alert("Mot de passw incorrect");

    }
    else {

      this.router.navigate([
        'dashboard'
      ])

    }




  }

}
