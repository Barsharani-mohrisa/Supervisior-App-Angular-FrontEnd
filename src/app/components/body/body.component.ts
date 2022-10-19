import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ReadMore:boolean = true

  isReadMore:boolean = false

  onclick(){
    this.isReadMore = !this.isReadMore;
    // this.Visible = !this.Visible
  }
  onRead(){
    this.ReadMore = !this.ReadMore;
  }

}
