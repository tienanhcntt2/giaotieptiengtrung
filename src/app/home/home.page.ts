import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(public router:Router){}

  setting(){
    this.router.navigateByUrl("setting");
  }

}
