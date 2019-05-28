import { Component, OnInit } from '@angular/core';
import { SavelLove } from '../util/savelove';
import { Love } from '../model/love';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.page.html',
  styleUrls: ['./vocabulary.page.scss'],
})
export class VocabularyPage implements OnInit {

  private mData : Love[] =[];
  constructor(public savelove: SavelLove) { }

  ngOnInit() {
    this.savelove.getAll().subscribe(data =>{
      this.mData = data;
    })
  }
  removeItem(data){
    let index = this.mData.indexOf(data);
    let id = data.id;
    
    if(index >-1){
      this.mData.splice(index, 1);
      this.savelove.delete(id).subscribe();
    }
   
  }
}
