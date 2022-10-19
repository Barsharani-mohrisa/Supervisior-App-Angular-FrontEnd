import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-societydirectory',
  templateUrl: './societydirectory.component.html',
  styleUrls: ['./societydirectory.component.css']
})
export class SocietydirectoryComponent implements OnInit {

  constructor(private service:ApiService, private _location: Location) { }


  totalLength:any;
  page:number=1;
  
  readData:any = [];

  ngOnInit(): void {
    this.getAllData();
  }

  back(){
    this._location.back();
  }
  
  getAllData(){
    this.service.getDirectory().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }
}
