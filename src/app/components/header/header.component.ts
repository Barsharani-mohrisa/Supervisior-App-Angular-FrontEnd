import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter <any> = new EventEmitter();
  
  formData: any;
  

  constructor(public _auth: DataService,private router: Router) { }

   email:any;
   first_name:any;

  ngOnInit() {
    // this.userDisplayName = sessionStorage.getItem('loggedUser');
    
  

    
    /*  let userCredentials=JSON.parse(localStorage.getItem('user')); 
      console.log(userCredentials);

      this.email=userCredentials.email; 
*/

    this.first_name = localStorage.getItem('user');
      
  
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();

  }
  //now on the other component , where you want to get the user name 
//to get user crdentials from the local storage 
 
//declare one more variable on other class where you want to sh 
//public userName:string 
//this.userName:string=userCredentials.userName; 
 
home() {
  this.router.navigate(['/home'])
}
}
