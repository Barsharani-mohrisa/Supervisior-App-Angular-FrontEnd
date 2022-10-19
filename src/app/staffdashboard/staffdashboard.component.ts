import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }

  readData2:any = [];
  readData:any = [];
  readData3:any = [];
  readData4:any = [];

  ngOnInit(): void {
    this.getAllUserData();
    this.getAllComplainData();
    this.getAllServiceData();
    this.getAllFlatData();
  }


  getAllUserData(){
    this.service.getSuper().subscribe((res)=>{
      console.log(res,"res==>");;
      this.readData = res.data;
      
    });
  }
  getAllComplainData(){
    this.service.getComplain().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData2 = res.data;
      
    });
  }
  getAllServiceData(){
    this.service.getServices().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData3 = res.data;
      
    });
  }
  getAllFlatData(){
    this.service.getFlat().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData4 = res.data;

    });
  }

  user() {
    this.router.navigate(['/user'])
  }
  complain(){
    this.router.navigate(['/complain']);
  }
  services(){
    this.router.navigate(['/localservices']);
  }
  flat(){
    this.router.navigate(['/flat']);
  }
}
