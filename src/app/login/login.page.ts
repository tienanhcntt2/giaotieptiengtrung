import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Database } from '../data/database';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatabaseProvider } from '../data/DatabaseProvider';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngForm : FormGroup;
 
  db: DatabaseProvider;
  user : User;
  show: boolean = false;
  lang: any;
  constructor(private formbuilder: FormBuilder, private router:Router,public translate: TranslateService) { 
    
    
   //this.db.insertUser(this.user);
  }

  ngOnInit() {
    this.checkLang();
    this.showLang();
    this.ngForm = this.formbuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
  get loginForm(){
    return this.ngForm.controls;
  }
  login(){
    
    //this.database.addUser(this.loginForm.email.value,this.loginForm.password.value);
    if(this.loginForm.user.value ==="tienanh" && this.loginForm.password.value ==="tienanh"){
      this.router.navigateByUrl("home");
      
      this.show = false;
    }else{
      this.show = true;
    }
  }
  functionRegister(){
    this.router.navigateByUrl("register");
  }
  // show language
  private showLang(){
    this.lang = localStorage.getItem("lang");
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }
  private checkLang(){
    if(localStorage.getItem("lang") === null){
      localStorage.setItem("lang","vn");
    }
    if(localStorage.getItem("pinjin") === null){
      localStorage.setItem("pinjin","true");
    }
  }
}
