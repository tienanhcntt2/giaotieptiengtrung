import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Database } from '../data/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngForm : FormGroup;
  private database: Database;
  constructor(private formbuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.ngForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
  get loginForm(){
    return this.ngForm.controls;
  }
  login(){
    

  }

}
