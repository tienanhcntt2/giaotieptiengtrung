import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Platform, NavController } from '@ionic/angular';

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



  constructor(public router: Router, public translate: TranslateService, public platform: Platform,
    public nav: NavController) {
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
  /**
   * change level
   */
  clickLevel(): void{
    //this.router.navigateByUrl("level");
    this.router.navigate(['/level', { level: 1, nameLevel : this.txt_level1 }]);
  }
  /**
   * change level
   */
  clickLevel2(){
    this.router.navigate(['/level', { level: 2, nameLevel : this.txt_level2 }]);
  }
  /**
   * change level
   */
  clickLevel3(){
    this.router.navigate(['/level', { level: 3, nameLevel : this.txt_level3 }]);
  }
  /**
   * change level
   */
  clickLevel4(){
    this.router.navigate(['/level', { level: 4, nameLevel : this.txt_level4 }]);
  }
  vocabulary(){
    this.router.navigateByUrl("vocabulary");
  }
}
