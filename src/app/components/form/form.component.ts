import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  constructor(private fb: FormBuilder) {
    
  }

 ngOnInit(): void {
 }

 
  frmRegister = this.fb.group({
   Name: ['', [ Validators.required, Validators.minLength(4) ] ],
   Email: ['', [Validators.required]],
   Number:['', [Validators.required]],
   
 });
 

 get frm(){
   return this.frmRegister.controls;
 }

 submitted = false;
 RegisterClick(obj:any){
   this.submitted = true;
   if(this.frmRegister.invalid){
     return;
   }
   alert(JSON.stringify(obj));

 }

}

