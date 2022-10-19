import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';



@Component({
  selector: 'app-localservice',
  templateUrl: './localservice.component.html',
  styleUrls: ['./localservice.component.css']
})
export class LocalserviceComponent implements OnInit {

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
    this.getAllData();
    this.getAllComData();
    this.getAllCategoryData();

    this.form = this.fb.group({
      name: [null],
      passcode: [null, [Validators.required, Validators.minLength(6)]],
      photo: [null],
      contact_number: [null, [Validators.required, Validators.maxLength(10)]],
      category_id: [null]
    });
  }

   
  getAllData(){
    this.service.getServices().subscribe((res)=>{
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

  getAllCategoryData(){
    this.service.getCategory().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData3 = res.data;
      
    });
  }
 
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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
    this.service.createServices(this.form.value).subscribe((res)=>{
      console.log(res,'res==>');
      this.form.reset();
      this.getAllData();
    });
   }
  }
  deleteID(id:any)
  {
    this.service.deleteServices(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      alert("Record Deleted...");
        this.getAllData();
      
   
    });
  }
  
  OnEdit(us:any,form:any){
     
    this.getparamid = us.id;
    console.log(this.getparamid);
  
    this.form.controls['name'].setValue(us.name);
    this.form.controls['contact_number'].setValue(us.contact_number);
    this.form.controls['category_id'].setValue(us.category_id);
    this.form.controls['passcode'].setValue(us.passcode);
   }
   ServiceUpdate(){
     console.log(this.getparamid);
     console.log(this.form.value,'updated');
     if(this.form.valid)
     {
       
       this.service.updateServices(this.getparamid,this.form.value ).subscribe((res)=>{
         alert( 'Updated Successfully...');
           this.getAllData();
           
       });
       
     }
   }
   
  
  
  
  
  }
  

