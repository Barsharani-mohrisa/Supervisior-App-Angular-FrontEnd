import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'kommunity';
  
  constructor(private router:Router){ }
    ngOnInit(): void {
    }
   home() {
     this.router.navigate(['/home'])
   }
   about() {
    this.router.navigate(['/about'])
  }
  features() {
    this.router.navigate(['/features'])
  }
  contact() {
    this.router.navigate(['/contact'])
  }
  login() {
    this.router.navigate(['/login'])
  }
    
  
}
