import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../util/ServiceData';
import { Giaotiep } from '../model/giaotiep';
import { first } from 'rxjs/internal/operators/first';
@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  private nameLevel: string;
  private url:string ="../../assets/data/giaotiep.json";
  private mPosition: number = 1;
  private mData: Giaotiep[] =[];
  private giaotiep: Giaotiep;
  
  /**
   * 
   * @param serviceData 
   */
  constructor(public serviceData:ServiceData) { }

  ngOnInit() {
    this.nameLevel = "Level1"
    this.getData();
    this.showData();
  }

  /**
   * get data for json in folder assets
   */
  private getData(){
    this.serviceData.getdata(this.url).pipe(first()).subscribe(info => {      
       this.mData = info;
       console.log("anhtt : " +info[1].tiengtrung);
    })
  }

  private showData(){
    this.giaotiep = this.mData[this.mPosition];
    // console.log("anhtt : " +this.giaotiep.tiengtrung);
  }


}
