import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  closeResult: any;
  form:any= FormGroup;
  form2:any= FormGroup;
  hide = true;
  selectedValue:any;


  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  totalLength:any;
  page:number=1;
 
  readData:any = [];
  readData2:any = [];
  readRole:any = [];
  readstaff:any = [];
  showCreate! : boolean;
  showUpdate! : boolean;
  getparamid:any;
  getid:any;
  map: any ={
    0: "Inactive",
    1: "Active"
  }


  ngOnInit(): void {
      this.getAllData();
     this.getAllComData();
     this.getAllRole();
     this.getData();
   
     

    this.form = this.fb.group({
      first_name: [null, [Validators.required, Validators.minLength(2)]],
      last_name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.pattern("^[A-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      community_id: [null],
      date_joined: [null],
      is_active: ['1']
     

      // confirmPassword: [null, [Validators.required]],
    });
    /*
    this.form2 = this.fb.group({
      user_id:[null],
      community_id: [null],
      role: [null]

      // confirmPassword: [null, [Validators.required]],
    });

*/
  }

  
  open(content: any) {
    this.showUpdate = false;
    this.showCreate = true;
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
    
     
   }
   
  back(){
    this._location.back();
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

/*
   open2(community: any) {
    this.showUpdate = false;
    this.showCreate = true;
     this.modalService.open(community, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismiss(reason)}`;
     });
    
     
   }
 
   private getDismiss(reason: any): string {
     if (reason === ModalDismissReasons.ESC) {
       return 'by pressing ESC';
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
       return 'by clicking on a backdrop';
     } else {
       return `with: ${reason}`;
     }

   }
  
   
  
*/

 saveDetails(form:any) {
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
   
 
   if(this.form.valid)
   {
     console.log(this.form.value);
     this.service.createData(this.form.value).subscribe((res)=>{
       console.log(res,'res==>');
      
       this.form.reset();
       this.getAllData();
     });
   }
  }
   saveRole(form2:any) {
   this.getAllData();
    if(this.form2.valid)
    {
      console.log(this.form2.value);
     
        this.service.createRole(this.form2.value).subscribe((res)=>{
         console.log(res,'res==>');
        this.getAllData();
      }); 
    }
   
 
   

  }

  deleteID(id:any)
  {
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      alert("Record Deleted...");
        this.getAllData();
      
   
    });
  }

  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }

  getAllRole(){
    this.service.getRole().subscribe((res)=>{
      console.log(res,"res==>");
      this.readRole = res.data;
    });
  }


  getAllComData(){
    this.service.getCommunity().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData2 = res.data;
    
    });
  }

  getData(){
    this.service.getData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readstaff = res.data;
    
    });
  }

 OnEdit(us:any,form:any){
 
  this.getparamid = us.id;
  console.log(this.getparamid);

  this.form.controls['first_name'].setValue(us.first_name);
  this.form.controls['last_name'].setValue(us.last_name);
  this.form.controls['email'].setValue(us.email);
  this.form.controls['password'].setValue(us.password);
  this.form.controls['phone'].setValue(us.phone);
  this.form.controls['community_id'].setValue(us.community_name);
  this.form.controls['date_joined'].setValue(us.date_joined);
  this.form.controls['is_active'].setValue(us.is_active);
 }
 userUpdate(){
   console.log(this.getparamid);
   console.log(this.form.value,'updated');
   if(this.form.valid)
   {
     
     this.service.updateData(this.getparamid,this.form.value ).subscribe((res)=>{
       alert( 'Updated Successfully...');
       this.form.reset();
       this.getAllData(); 
     });
   }
 }
 
/*
 OnEdit2(as:any){
  this.getid = as.id;
  console.log(this.getid);

  this.form2.controls['role'].setValue(as.role);
  this.form2.controls['user_id'].setValue(as.user_id);
  this.form2.controls['community_id'].setValue(as.community_id);
 }
 RoleUpdate(){
   console.log(this.getid);
   console.log(this.form2.value,'updated');
   if(this.form2.valid)
   {
     
     this.service.updateRole(this.getid,this.form2.value ).subscribe((res)=>{
       alert( 'Updated Successfully...');
       this.form2.reset();
      
       this.getAllData(); 
     });
   }
 }
 */
  
  

  
} 



