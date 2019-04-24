import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup;

  constructor(private formbuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.formLogin = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
  get loginForm(){
    return this.formLogin.controls;
  }
  onSubmit(){
    alert("hello : " +this.loginForm.email.value);

  }

}
