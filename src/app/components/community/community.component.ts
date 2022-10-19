import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';



@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  closeResult: any;
  form:any= FormGroup;
  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  totalLength:any;
  page:number=1;
  readData:any = [];
  readData2:any =[];
  getparamid:any;
  map: any ={
    0: "Inactive",
    1: "Active"
  }

  ngOnInit(): void {
    this.getAllComData();
    this.getCityData();

 
    this.form = this.fb.group({
      community_name: [null, [Validators.required, Validators.maxLength(15)]],
      city_id: [null, [Validators.required]],
      pincode: [null, [Validators.required, Validators.minLength(6)]],
      is_active: ['1']
    });

  }

  getAllComData(){
    this.service.getCommunity().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }
  
  getCityData(){
    this.service.getCity().subscribe((res)=>{
      console.log(res,"res==>");
    this.readData2 = res.data;
    });
  }
  back(){
    this._location.back();
  }


  open(content: any) {
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
  

 saveDetails(form:any) {
  console.log(this.form.value);
   if(this.form.valid)
   {
     console.log(this.form.value);
     this.service.createCommunity(this.form.value).subscribe((res)=>{
       console.log(res,'res==>');
      
       this.form.reset();
       this.getAllComData();
     });
    
   }
 }

 deleteID(id:any)
  {
    this.service.deleteCommunity(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      alert("Record Deleted...");
        this.getAllComData();
    });
  }

  OnEdit(us:any,form:any){
   
    this.getparamid = us.id;
    console.log(this.getparamid);
  
    this.form.controls['community_name'].setValue(us.community_name);
    this.form.controls['pincode'].setValue(us.pincode);
    this.form.controls['city_id'].setValue(us.city_id);
    this.form.controls['is_active'].setValue(us.is_active);
    
  
   }
   CommunityUpdate(){
     console.log(this.getparamid);
     console.log(this.form.value,'updated');
     if(this.form.valid)
     {
       
       this.service.updateCommunity(this.getparamid,this.form.value ).subscribe((res)=>{
         alert( 'Updated Successfully...');
         this.form.reset();
           this.getAllComData();
       });
     }
   }
   




}
