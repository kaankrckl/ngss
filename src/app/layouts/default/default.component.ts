import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  username: string = "";
  data= {
    username: ""
  };

  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.data.username= this.username
  }

  sideBarToggler(event){
    //this.sideBarOpen = !this.sideBarOpen;
  }

}
