import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  private nameLevel: string;
  constructor() { }

  ngOnInit() {
    this.nameLevel = "Level1"
  }

}
