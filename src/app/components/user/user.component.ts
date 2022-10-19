import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  closeResult: any;
  form:any= FormGroup;
  form2:any= FormGroup;



  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  getparamid:any;
  getid:any;
  totalLength:any;
  page:number=1;
  
  readData:any = [];
  readData2:any = [];
 
  map: any ={
    0: "Inactive",
    1: "Active"
  }
   map2: any ={
    0: "NotApproved",
    1: "Approved"
  }
  community_id:any;




  ngOnInit(): void {
    this.getAllData();
    this.getFlat();

    this.form = this.fb.group({
      first_name: [null, [Validators.required, Validators.minLength(2)]],
      last_name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.pattern("^[A-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      date_joined: [null],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      role: [null, [Validators.required]],
      occupancy_status: [null, [Validators.required]],
      flat_id: [null]
      
     

      // confirmPassword: [null, [Validators.required]],
    });
  }

  
  getAllData(){
    this.service.getSuper().subscribe((res)=>{
      console.log(res,"res==>");;
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }
 
  getFlat(){
    this.service.getgetFlat().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData2 = res.data;
    

    });
  }
  
  deleteID(id:any)
  {
    this.service.deleteSuper(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      alert("Record Deleted...");
        this.getAllData();
      
   
    });
  }

  back(){
    this._location.back();
  }
  
 UpdateButton(us:any){
  this.getparamid = us.user_id;
  console.log(this.getparamid);
  
   if(this.map[us.is_admin_approved] === 'Inactive')
   
   {
    console.log(this.map[us.is_admin_approved]);
    this.service.updateAccountStatus(this.getparamid,this.map[us.is_admin_approved]).subscribe((res)=>{
      alert( 'Updated Successfully...');

  
   console.log(this.map[us.is_admin_approved]);
   this.map[us.is_admin_approved]; 
   this.getAllData();
   
  
    });

}
else
{
  console.log(this.map[us.is_admin_approved]);
 this.service.AccountStatus(this.getparamid,this.map[us.is_admin_approved]).subscribe((res)=>{
   alert( 'Updated Successfully...');

console.log(this.map[us.is_admin_approved]); 
this.getAllData();

 });

}
 }

UpdateStatus(us:any){
  this.getid = us.user_id;
  console.log(this.getid);
  
   if(this.map2[us.is_approved] === 'NotApproved')
   
   {
    console.log(this.map2[us.is_approved]);
    this.service.updateResidentStatus(this.getid,this.map2[us.is_approved]).subscribe((res)=>{
      alert( 'Resident Updated Successfully...');

  
   console.log(this.map2[us.is_approved]);
   this.map2[us.is_approved]; 
   this.getAllData();
   
  
    });

}
else
{
  console.log(this.map2[us.is_approved]);
 this.service.ResidentStatus(this.getid,this.map2[us.is_approved]).subscribe((res)=>{
   alert( 'Updated Successfully...');

console.log(this.map2[us.is_approved]); 
this.getAllData();

 });

}

}

/*
if (this.map[us.is_admin_approved].value = 'Active')

{
  console.log(this.map[us.is_admin_approved].value);
  this.service.AccountStatus(this.getparamid,this.map[us.is_admin_approved].value).subscribe((res)=>{
    // this.map[us.is_admin_approved] = 'Active';
     console.log(this.map[us.is_admin_approved]); 
     this.getAllData();
      });
    }

else(this.toggle)
{
  this.service.updateAccountStatus(this.getparamid,this.map[us.is_admin_approved].value ).subscribe((res)=>{
    console.log(this.toggle);
    this.map[us.is_admin_approved] = 'Inactive';  
    console.log(this.map[us.is_admin_approved] ); 
  }); 
   //this.toggle = !this.toggle;
   //this.map2[us.is_approved] = this.toggle ? 'Approved' : 'Not Approved';
 }*/
 

  saveDetails(form:any) {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
     
   
     if(this.form.valid)
     {
       console.log(this.form.value);
       this.service.createSuper(this.form.value).subscribe((res)=>{
         console.log(res,'res==>');
        
         this.form.reset();
         this.getAllData();
       });
     }
    }

    open(content: any) {
    
       this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
         this.form.reset();
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
         this.form.reset();
       });
      
       
     }
   
     private getDismissReason(reason: any): string {
       if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
       } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
       } else {
         return `with: ${reason}`;
         
       }
  
     }

     OnEdit(us:any,form:any){
 
      this.getparamid = us.user_id;
      console.log(this.getparamid);
    
      this.form.controls['first_name'].setValue(us.first_name);
      this.form.controls['last_name'].setValue(us.last_name);
      this.form.controls['email'].setValue(us.email);
      this.form.controls['password'].setValue(us.password);
      this.form.controls['phone'].setValue(us.phone);
     // this.form.controls['date_joined'].setValue(us.date_joined);
      this.form.controls['flat_id'].setValue(us.flat_id);
      this.form.controls['role'].setValue(us.role);
      this.form.controls['occupancy_status'].setValue(us.occupancy_status);
     }
     userUpdate(){
       console.log(this.getparamid);
       console.log(this.form.value,'updated');
       if(this.form.valid)
       {
         
         this.service.updateSuper(this.getparamid,this.form.value ).subscribe((res)=>{
           alert( 'Updated Successfully...');
           this.form.reset();
           this.getAllData(); 
         });
       }
     }
  

}
