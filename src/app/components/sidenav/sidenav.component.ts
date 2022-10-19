import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 
  panelOpenState = false;
  items = ['Item 1'];
  expandedIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

    notice(){
      this.router.navigate(['/notice']);
    }
    user(){
      this.router.navigate(['/user']);
    }
   
    directory(){
      this.router.navigate(['/directory']);
    }
    security(){
      this.router.navigate(['/security']);
    }
    Emergency(){
      this.router.navigate(['/emergency']);
    }
    complain(){
      this.router.navigate(['/complain']);
    }
    Category(){
      this.router.navigate(['/servicecategory']);
    }
    Service(){
      this.router.navigate(['/localservices']);
    }
    Block(){
      this.router.navigate(['/block']);
    }
    Floor(){
      this.router.navigate(['/floor']);
    }
    Flat(){
      this.router.navigate(['/flat']);
    }
    Gate(){
      this.router.navigate(['/gate']);
    }
  }
  


