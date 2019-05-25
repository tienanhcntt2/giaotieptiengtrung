import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../util/ServiceData';
import { Giaotiep } from '../model/giaotiep';
import { first } from 'rxjs/internal/operators/first';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  private nameLevel: string;
  private mNumberLevel: number;
  private url: string = "../../assets/data/giaotiep.json";
  private mPosition: number = 0;
  private mData: Giaotiep[] = [];
  private giaotiep: Giaotiep = new Giaotiep();
  private checkPre: boolean = true;
  private showPinjin : boolean = true;
  private numberClick: number = 0;
  private iconLike: string ="../assets/icon/heart_up.svg";
  /**
   * 
   * @param serviceData 
   */
  constructor(public serviceData: ServiceData, public clipboard: Clipboard, private tts: TextToSpeech,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nameLevel = "Level1"
    this.mNumberLevel = parseInt(this.activatedRoute.snapshot.paramMap.get("level"));
    this.getLevel(this.mNumberLevel);
    this.nameLevel = this.activatedRoute.snapshot.paramMap.get("nameLevel");
    //this.checkPosition();
    this.getData();
    if (this.mPosition <= 0 || this.mPosition <= 400 || this.mPosition <= 600) {
      this.checkPre = false;
    }
    this.checkShowPinjin();

  }

  private getLevel(level: number) {
    if (level === 1) {

      this.mPosition = 0
      //this.checkPosition(level);
    } else if (level === 2) {

      this.mPosition = 200;
      //.checkPosition(level);
    } else if (level === 3) {

      this.mPosition = 400;
      //this.checkPosition(level);
    } else if (level === 4) {

      this.mPosition = 600;
      //this.checkPosition(level);
    }

  }

  /**
   * get data for json in folder assets
   */
  private getData() {
    this.serviceData.getdata(this.url).pipe(first()).subscribe(info => {
      this.mData = info;
      this.giaotiep = this.mData[this.mPosition]

    })
  }
  /**
   * function click next
   */
  next() {
   
    switch (this.mNumberLevel) {
      case 1:
        this.savePosition(0, 200, 1);
        break;
      case 2:

        this.savePosition(201, 400, 2);
        break;
      case 3:

        this.savePosition(401, 600, 3);
        break;
      case 4:
        this.savePosition(601, 800, 4);
        break;
    }

  }

  /**
   * function click preview
   */
  pre() {

    this.mPosition -= 1;
    
    switch (this.mNumberLevel) {
      case 1:
          if (this.mPosition <= 0) {
            this.checkPre = false;
          }
        break;
      case 2:
          if (this.mPosition <= 200) {
            this.checkPre = false;
          }
        break;
      case 3:
          if (this.mPosition <= 400) {
            this.checkPre = false;
          }
        break;
      case 4:
          if (this.mPosition <= 600) {
            this.checkPre = false;
          }
        break;
    }
    
    this.giaotiep = this.mData[this.mPosition];
  }

  private checkPosition(position: number) {
    if (localStorage.getItem("position" + position) === null) {
      switch (position) {
        case 1:
          this.mPosition = 0;
          break;
        case 2:
          this.mPosition = 200;
          break;
        case 3:
          this.mPosition = 400;
          break;
        case 4:
          this.mPosition = 600;
          break;
      }
    } else {
      this.mPosition = parseInt(localStorage.getItem("position" + position));
    }
  }
  /**
   * function coppy
   */
  coppy() {
    this.clipboard.copy(this.mData[this.mPosition].tiengtrung);
  }
  /**
   * function speak
   */
  speak() {
    this.tts.speak(this.mData[this.mPosition].tiengtrung)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  private savePosition(position: number, maxPosition: number, level: number) {
    this.mPosition += 1;
    if (this.mPosition >= position) {
      this.checkPre = true;
    } else if (this.mPosition >= maxPosition) {
      alert("ban da qua cap " + level);
    }
    localStorage.setItem("position" + level, "" + this.mPosition);

    this.giaotiep = this.mData[this.mPosition];
    console.log("anhtt : " + position + " " + maxPosition + " " + level + " " + this.mPosition);
  }
  private checkShowPinjin(){
    if(localStorage.getItem("pinjin") ==="true"){
      this.showPinjin = true;
    }else{
      this.showPinjin = false;
    }
    
  }

  likeItem(){
     this.numberClick += 1;
     if(this.numberClick %2 != 0){
      this.iconLike = "../assets/icon/heart.svg";
     }else{
       this.iconLike = "../assets/icon/heart_up.svg";
     }
  }
}
