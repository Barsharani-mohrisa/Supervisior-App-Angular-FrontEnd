import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';


@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {

  closeResult: any;
  form:any= FormGroup;
  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  totalLength:any;
  page:number = 1;
  readData2:any = [];
  readData:any = [];
  getparamid:any;

  ngOnInit(): void {
    this.getAllData();
    this.getAllComData();

    this.form = this.fb.group({
      title: [null],
      contact: [null, [Validators.required, Validators.minLength(10)]]
    });

  }

   
  getAllData(){
    this.service.getDial().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }
  getAllComData(){
    this.service.getCommunity().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData2 = res.data;
    
    });
  }
 

  open(content: any) {
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
 

saveDetails(form:any) {
 
  if(this.form.valid)
  {
    console.log(this.form.value);
    this.service.createDial(this.form.value).subscribe((res)=>{
      console.log(res,'res==>');
      this.form.reset();
      this.getAllData();
    });
  }
}

deleteID(id:any)
{
  this.service.deleteDial(id).subscribe((res)=>{
    console.log(res,'deleteres==>');
    alert("Record Deleted...");
      this.getAllData();
    
 
  });
}

OnEdit(us:any,form:any){
   
  this.getparamid = us.id;
  console.log(this.getparamid);

  this.form.controls['title'].setValue(us.title);
  this.form.controls['contact'].setValue(us.contact);
  
 }
 DialUpdate(){
   console.log(this.getparamid);
   console.log(this.form.value,'updated');
   if(this.form.valid)
   {
     
     this.service.updateDial(this.getparamid,this.form.value ).subscribe((res)=>{
       alert( 'Updated Successfully...');
       
         this.getAllData();
     });
   }
 }
 
}
