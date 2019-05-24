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
    if (this.mPosition <= 0 || this.mPosition <=400 || this.mPosition <=600) {
      this.checkPre = false;
    }

  }

  private getLevel(level: number) {
    if (level === 1) {
      
      this.mPosition = 0
      this.checkPosition(level);
    } else if (level === 2) {
      
      this.mPosition = 200;
      this.checkPosition(level);
    } else if (level === 3) {
      
      this.mPosition = 400;
      this.checkPosition(level);
    } else if (level === 4) {
      
      this.mPosition = 600;
      this.checkPosition(level);
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
          this.mPosition += 1;
          if (this.mPosition > 0) {
            this.checkPre = true;
          } else if (this.mPosition >= 200) {
            alert("ban da qua cap 1");
          }
          localStorage.setItem("position1", "" + this.mPosition);
      
          this.giaotiep = this.mData[this.mPosition];
        break;
      case 2:
          this.mPosition += 1;
          if (this.mPosition >=201) {
            this.checkPre = true;
          } else if (this.mPosition >= 400) {
            alert("ban da qua cap 2");
          }
          localStorage.setItem("position2", "" + this.mPosition);
      
          this.giaotiep = this.mData[this.mPosition];
        break;
      case 3:
          this.mPosition += 1;
          if (this.mPosition >=401) {
            this.checkPre = true;
          } else if (this.mPosition >= 600) {
            alert("ban da qua cap 3");
          }
          localStorage.setItem("position3", "" + this.mPosition);
      
          this.giaotiep = this.mData[this.mPosition];
        break;
      case 4:
          this.mPosition += 1;
          if (this.mPosition > 601) {
            this.checkPre = true;
          } else if (this.mPosition >= 800) {
            alert("ban da qua cap 4");
          }
          localStorage.setItem("position4", "" + this.mPosition);
      
          this.giaotiep = this.mData[this.mPosition];
        break;
    }
    
  }
  /**
   * function click preview
   */
  pre() {

    this.mPosition -= 1;
    if (this.mPosition <= 0) {
      this.checkPre = false;
    }
    this.giaotiep = this.mData[this.mPosition];
  }

  private checkPosition(position : number) {
    if (localStorage.getItem("position"+position) === null) {
      this.mPosition = 0;
    } else {
      this.mPosition = parseInt(localStorage.getItem("position"+position));
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
}
