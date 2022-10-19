import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   email: string="";
   password: string="";
   loading = false;
   submitted = false;
   error:any;
   
     
   
  

  constructor(private formBuilder: FormBuilder,private router: Router,private _auth: DataService) { }

     formData =  this.formBuilder.group({
         email: ['', Validators.required],
         password: ['',Validators.required]
         
      });

      ngOnInit() :void{      
     
      }
       
get f() { 
   return this.formData.controls; 
   
}  
       
   onClickSubmit()
   {
   
      this.submitted = true;

   if(this.formData.valid)
   {
      this.loading = true;
   console.log(this.formData.value,'loginvalue...')
      this._auth.login(this.formData.value).subscribe((res) => {


            console.log("Is Login Success: "); 
            console.log(res.status); 

         if(res.status==true )
         { 
            console.log(res,'data...');
            const user = res.first_name;
            console.log(res.first_name);
           
            // this.user=this.formData.value; 
             console.log(user);
             localStorage.setItem('user',user);
            console.log(user);

            const err = res.message;
            console.log(err);
            localStorage.setItem('err',err);
            this.error = localStorage.getItem('err');

            this.router.navigate(['/staff'])
          
         }  
         
         else{
          console.log('err');
          const err = res.message;
          console.log(err);
          localStorage.setItem('err',err);
          this.error = localStorage.getItem('err');
         }

         if(res.first_name == "Admin")
         {
            const user = res.first_name;
            console.log(res.first_name);
           
             console.log(user);
             localStorage.setItem('user',user);
            console.log(user);
            this.router.navigate(['/admin'])
         }
      });
   } 
 
   }
}
