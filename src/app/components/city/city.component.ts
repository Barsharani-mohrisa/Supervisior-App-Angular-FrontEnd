import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  closeResult: any;
  form:any= FormGroup;
  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location) { }

  totalLength:any;
  page:number = 1;
  readData:any = [];
  getparamid:any;
  
  ngOnInit(): void {
    this.getAllCityData();

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
    });

  }

  getAllCityData(){
    this.service.getCity().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
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
    this.service.createCity(this.form.value).subscribe((res)=>{
      console.log(res,'res==>');
      this.form.reset();
      this.getAllCityData();
    });
  }
}

deleteID(id:any)
{
  this.service.deleteCity(id).subscribe((res)=>{
    console.log(res,'deleteres==>');
    alert("Record Deleted...");
      this.getAllCityData();
    
 
  });
}

OnEdit(us:any,form:any){
   
  this.getparamid = us.id;
  console.log(this.getparamid);

  this.form.controls['name'].setValue(us.name);
 
  

 }
 CityUpdate(){
   console.log(this.getparamid);
   console.log(this.form.value,'updated');
   if(this.form.valid)
   {
     
     this.service.updateCity(this.getparamid,this.form.value ).subscribe((res)=>{
       alert( 'Updated Successfully...');
       
         this.getAllCityData();
     });
   }
 }
 



}

