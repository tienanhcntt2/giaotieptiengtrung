import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister : FormGroup;
  constructor(private formbuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.formRegister = this.formbuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      configPassowrd:['',Validators.required],
      email : ['', Validators.required]
    });
  }


  login(){
    this.router.navigateByUrl("login");
  }
}
