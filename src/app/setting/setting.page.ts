import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  lang:any;
  title: string;
  constructor(public translate: TranslateService) {
    this.lang = localStorage.getItem("lang");
    console.log("anhtt : "+ this.lang);
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }
  
  ngOnInit() {
    this._initialiseTranslation();
  }
  switchLanguage() {
    this.translate.use(this.lang);
    localStorage.setItem("lang",this.lang);
    console.log("anhtt : "+ this.lang);
    this._initialiseTranslation();
  }
  private _initialiseTranslation() : void
  {
     setTimeout(() =>
     {
        this.title 			  = this.translate.instant("Setting.selectlanguage");
        
     }, 250);
  }
}
