import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../util/ServiceData';
import { Giaotiep } from '../model/giaotiep';
import { first } from 'rxjs/internal/operators/first';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  private nameLevel: string;
  private url:string ="../../assets/data/giaotiep.json";
  private mPosition: number = 0;
  private mData: Giaotiep[] = [];
  private giaotiep: Giaotiep = new Giaotiep();
  private checkPre: boolean = true;
  
  /**
   * 
   * @param serviceData 
   */
  constructor(public serviceData:ServiceData) { }

  ngOnInit() {
    this.nameLevel = "Level1"
    this.getData();
    if(this.mPosition <= 0){
      this.checkPre = false;
    }
  }

  /**
   * get data for json in folder assets
   */
  private getData(){
    this.serviceData.getdata(this.url).pipe(first()).subscribe(info => {      
       this.mData = info;
       this.giaotiep = this.mData[this.mPosition]
       
    })
  }
  /**
   * function click next
   */
  next(){
    this.mPosition += 1;
    if(this.mPosition > 0){
      this.checkPre = true;
    }
  
    this.giaotiep = this.mData[this.mPosition];
  }
  /**
   * function click preview
   */
  pre(){
   
    this.mPosition -= 1;
    if(this.mPosition <= 0){
      this.checkPre = false;
    }
    this.giaotiep = this.mData[this.mPosition];
  }

}
