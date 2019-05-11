import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  lang:any;
  // value text title setting
  title: string;
  txt_select_bg: string;
  txt_title : string;
  txt_pinjin: string;
  txt_select_lg: string;
  bg_content: any;
  txt_version: string;
  txt_share:string;
  txt_review: string;
  //value
  pinjin : boolean;
  version: string = "1.0.1";
  // constructor
  constructor(public translate: TranslateService) {
    this.bg_content = localStorage.getItem("bg");
    if(localStorage.getItem("pinjin") === "true"){
      this.pinjin = true;
    }else{
      this.pinjin = false;
    }
    this.lang = localStorage.getItem("lang");

    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }
  
  ngOnInit() {
    this._initialiseTranslation();
  }
  switchLanguage() {
    this.translate.use(this.lang);
    localStorage.setItem("lang",this.lang);

    this._initialiseTranslation();
  }
  private _initialiseTranslation() : void
  {
     setTimeout(() =>
     {
        this.txt_title  = this.translate.instant("Setting.title");
        this.txt_select_bg = this.translate.instant("Setting.txt_select_bg");
        this.txt_pinjin = this.translate.instant("Setting.txt_pinjin");
        this.txt_select_lg = this.translate.instant("Setting.selectlanguage");
        this.txt_version = this.translate.instant("Setting.txt_version");
        this.txt_share = this.translate.instant("Setting.txt_share");
        this.txt_review = this.translate.instant("Setting.txt_review");
     }, 250);
  }
  notify(){
    localStorage.setItem("pinjin",""+this.pinjin);
  }
  selectBg(){
    this.bg_content =this.bg_content;
    localStorage.setItem("bg",this.bg_content);
    
  }
}
