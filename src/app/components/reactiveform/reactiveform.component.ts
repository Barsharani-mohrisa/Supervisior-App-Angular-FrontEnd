import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {

  
  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
  }

  
   frmRegister = this.fb.group({
    Name: ['', [ Validators.required, Validators.minLength(4) ] ],
    Price: ['', [Validators.required]],
    frmStockDetails: this.fb.group({
      Stock: [''],
      City: ['']
    })
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
