import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //value title string
  txt_level1: string;
  txt_level2: string;
  txt_level3: string;
  txt_level4: string;
  txt_vocabulary: string;
  txt_setting: string;
  txt_title : string;

  lang: any;

  // home page



  constructor(public router: Router, public translate: TranslateService, public platform: Platform) {
    if(localStorage.getItem("bg") === null){
      localStorage.setItem("bg","#333333");
    }
  }
  ngOnInit(): void {   
  }
  ionViewWillEnter() {
    this.lang = localStorage.getItem("lang");
    this._initialiseTranslation();
    this.translate.use(this.lang);

  }
  setting() {
    this.router.navigateByUrl("setting");
  }

  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.txt_level1 = this.translate.instant("HOME.txt_level_1");
      this.txt_level2 = this.translate.instant("HOME.txt_level_2");
      this.txt_level3 = this.translate.instant("HOME.txt_level_3");
      this.txt_level4 = this.translate.instant("HOME.txt_level_4");
      this.txt_vocabulary = this.translate.instant("HOME.txt_vocabulary");
      this.txt_setting = this.translate.instant("HOME.txt_setting");
      this.txt_title = this.translate.instant("HOME.txt_title");
    }, 250);
  }
  clickLevel(): void{
    this.router.navigateByUrl("level");
  }
}
