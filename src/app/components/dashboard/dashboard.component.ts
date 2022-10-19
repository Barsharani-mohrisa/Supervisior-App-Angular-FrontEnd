import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 
  constructor(private service:ApiService,private router:Router) { }

  readCom:any = [];
  readCity:any = [];
  readStaff:any = [];
 

  ngOnInit(): void {
    this.getAllCom();
    this.getAllCityData();
    this.getAllData();

  }

    getAllCom(){
      this.service.getCommunity().subscribe((res)=>{
        console.log(res,"res==>");
        this.readCom = res.data;
        
      });
    
  
}

getAllCityData(){
  this.service.getCity().subscribe((res)=>{
    console.log(res,"res==>");
    this.readCity = res.data;
    
  });
}

getAllData(){
  this.service.getAllData().subscribe((res)=>{
    console.log(res,"res==>");
    this.readStaff = res.data;
    
  });
}


  User() {
    this.router.navigate(['/create'])
  }
  Community() {
    this.router.navigate(['/community'])
  }
  City() {
    this.router.navigate(['/city'])
  }
  Dashboard() {
    this.router.navigate(['/admin/dashboard'])
  }

}
