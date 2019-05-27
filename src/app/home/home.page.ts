import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Platform, NavController, ToastController } from '@ionic/angular';

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
    public nav: NavController,public toastController: ToastController) {
      if(localStorage.getItem("level") === null){
        localStorage.setItem("level","1");
      }
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
    if(parseInt(localStorage.getItem("level")) >= 2){
      this.router.navigate(['/level', { level: 2, nameLevel : this.txt_level2 }]);
    }else{
     this.showToast("ban chua hoc qua level truoc do");
    }
    
  }
  /**
   * change level
   */
   clickLevel3(){
    if(parseInt(localStorage.getItem("level")) >= 3){
      this.router.navigate(['/level', { level: 3, nameLevel : this.txt_level3 }]);
    }else{
      this.showToast("ban chua hoc qua level truoc do");
    }
   
  }
  /**
   * change level
   */
  clickLevel4(){
    if(parseInt(localStorage.getItem("level")) >= 4){
      this.router.navigate(['/level', { level: 4, nameLevel : this.txt_level4 }]);
    }else{
      this.showToast("ban chua hoc qua level truoc do");
    }
   
    
  }
  vocabulary(){
    this.router.navigateByUrl("vocabulary");
  }
  async showToast(message : string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
