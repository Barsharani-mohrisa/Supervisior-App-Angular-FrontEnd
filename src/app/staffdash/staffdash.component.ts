import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staffdash',
  templateUrl: './staffdash.component.html',
  styleUrls: ['./staffdash.component.css']
})
export class StaffdashComponent implements OnInit {

  constructor() { }
  sideBarOpen = true;
  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
