import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';


@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit {

  

  closeResult: any;
  form:any= FormGroup;
  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  totalLength:any;
  page:number = 1;
  readData:any = [];
  readData2:any = [];
  getparamid:any;
  
  ngOnInit(): void {
    this.getAllData();
    this.getAllComData();

    this.form = this.fb.group({
      gate_name: [null]
    });

  }

  getAllData(){
    this.service.getGate().subscribe((res)=>{
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

  back(){
    this._location.back();
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
 

saveDetails(form:any) {
 
  if(this.form.valid)
  {
    console.log(this.form.value);
    this.service.createGate(this.form.value).subscribe((res)=>{
      console.log(res,'res==>');
      alert("Gate Added...")
      this.form.reset();
      this.getAllData();
    });
  }
}

deleteID(id:any)
{
  this.service.deleteGate(id).subscribe((res)=>{
    console.log(res,'deleteres==>');
    alert("Record Deleted...");
      this.getAllData();
    
 
  });
}

OnEdit(us:any,form:any){
   
  this.getparamid = us.id;
  console.log(this.getparamid);

  this.form.controls['gate_name'].setValue(us.gate_name);
  this.form.controls['community_id'].setValue(us.community_id);
 }
 UpdateGate(){
   console.log(this.getparamid);
   console.log(this.form.value,'updated');
   if(this.form.valid)
   {
     
     this.service.updateGate(this.getparamid,this.form.value ).subscribe((res)=>{
       alert( 'Updated Successfully...');
         this.getAllData();
     });
   }
 }
 



}


