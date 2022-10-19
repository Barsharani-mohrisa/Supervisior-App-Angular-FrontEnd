import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';


@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  closeResult: any;
  form:any= FormGroup;
  id: any;
  selectedBlock: any = {
    id:0, block_name:''
  };
  floor: any;
  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  totalLength:any;
  page:number = 1;
  readData:any = [];
  readData2:any = [];
  readData3:any = [];
  readData4:any = [];
  getparamid:any;
  
  ngOnInit(): void {
    this.getAllData();
    this.getAllBlockData();
    this.getAllFloorData();
    this.getAllComData();
    

    this.form = this.fb.group({
      floor_id: [null],
      block_id: [null],
      flat_number: [null]
    });

  }

  getAllData(){
    this.service.getFlat().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }
  
  back(){
    this._location.back();
  }
  
  getAllFloorData(){
    this.service.getFloor().subscribe((res)=>{
      console.log(res,"res==>");
     // this.readData4 = res.data;
    
    });
  }
  getAllBlockData(){
    this.service.getBlock().subscribe((res)=>{
     
      console.log(res,"res==>");
      this.readData2 = res.data;
      
    });
  }
  onSelect(event:any){
    console.log(event);
    this.service.getFloorById(event.target.value).subscribe((res)=>{
     
    this.readData4 = res.data;
    
    });
  
  }

  getAllComData(){
    this.service.getCommunity().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData3 = res.data;
    
    });
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
 
  if(this.form.valid)
  {
    console.log(this.form.value);
    this.service.createFlat(this.form.value).subscribe((res)=>{
      console.log(res,'res==>');
      this.form.reset();
      this.getAllData();
    });
  }
}

deleteID(id:any)
{
  this.service.deleteFlat(id).subscribe((res)=>{
    console.log(res,'deleteres==>');
    alert("Record Deleted...");
      this.getAllData();
    
 
  });
}

OnEdit(us:any,form:any){
   
  this.getparamid = us.id;
  console.log(this.getparamid);

  this.form.controls['floor_id'].setValue(us.floor_id);
  this.form.controls['block_id'].setValue(us.block_id);
  this.form.controls['flat_number'].setValue(us.flat_number);

 }
 FlatUpdate(){
   console.log(this.getparamid);
   console.log(this.form.value,'updated');
   if(this.form.valid)
   {
     
     this.service.updateFlat(this.getparamid,this.form.value ).subscribe((res)=>{
       alert( 'Updated Successfully...');
         this.getAllData();
     });
   }
 }
 



}



