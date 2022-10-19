import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';


@Component({
  selector: 'app-localservicecategory',
  templateUrl: './localservicecategory.component.html',
  styleUrls: ['./localservicecategory.component.css']
})
export class LocalservicecategoryComponent implements OnInit {

  closeResult: any;
  form:any= FormGroup;

  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  totalLength:any;
  page:number = 1;
  readData:any = [];
  readData2:any = [];
  readData3:any = [];
  getparamid:any;


  ngOnInit(): void {
    
    this.getAllCategoryData();
    this.getAllComData();

    this.form = this.fb.group({
      service_name: [null]
    });
  }

  getAllCategoryData(){
    this.service.getCategory().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      
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
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  
  }
  
  back(){
    this._location.back();
  }
  
  
  saveDetails(form:any) {
  
  if(this.form.valid)
  {
    console.log(this.form.value);
    this.service.createCategory(this.form.value).subscribe((res)=>{
      console.log(res,'res==>');
      alert("Data added successfully...");
      this.form.reset();
      this.getAllCategoryData();

    });
   }
  }
  deleteID(id:any)
  {
    this.service.deleteCategory(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      alert("Record Deleted...");
        this.getAllCategoryData();
      
   
    });
  }
  
  OnEdit(us:any,form:any){
     
    this.getparamid = us.id;
    console.log(this.getparamid);
  
    this.form.controls['service_name'].setValue(us.service_name);
   }
   CategoryUpdate(){
     console.log(this.getparamid);
     console.log(this.form.value,'updated');
     if(this.form.valid)
     {
       
       this.service.updateCategory(this.getparamid,this.form.value ).subscribe((res)=>{
         alert( 'Updated Successfully...');
           this.getAllCategoryData();
       });
     }
   }
   
  
  
  
  
  }
  



