import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {


  closeResult: any;
  form:any= FormGroup;
  form2:any= FormGroup;
  media:any;
  myForm:any;
  SelectedImage:any;


  constructor(private service:ApiService,private fb: FormBuilder, private modalService: NgbModal, private _location: Location,private http: HttpClient) { }

  totalLength:any;
  page:number=1;
  getparamid:any;
 
  readData:any = [];
  readData2:any = [];

  ngOnInit(): void {
    this.getAllData();

    this.form = this.fb.group({
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
      media:[null]
    });
    // this.myForm = new FormGroup({
    //   subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   message: new FormControl('', [Validators.required, Validators.minLength(3)]),

    //   media: new FormControl('', [Validators.required]),
    //   fileSource: new FormControl('', [Validators.required])
    // });
    
  }

   
  getAllData(){
    this.service.getNotice().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }
    getAllNotice(){
      this.service.getNotice2().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData2 = res.data;
        this.totalLength = (res.data).length;
      });
  }

    
  back(){
    this._location.back();
  }
    
  open(content: any) {
    
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

   selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.media = file;
      console.log(file);
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.SelectedImage = event.target.result;
      }
    }
  }

  
   saveDetails(subject:any,message:any,media:any) {
    alert('hey')
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(subject.value,message.value,media.value));
    
       this.service.createNotice(subject.value,message.value,this.media).subscribe((res)=>{
         console.log(res,'res==>');
         console.log('done')
        
         this.getAllData();
       });
      }


  //   var myFormData = new FormData();
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //  // myFormData.append('media', this.media);  
  //   myFormData.append('sub',this.form.value);
   
  //   this.http.post<any>('http://localhost:5500/create_notice', (myFormData), {
  //     headers: headers
  //     }).subscribe(data => {
  //      //Check success message
  //      console.log(data);
  //     });  
    

    deleteID(id:any)
{
  this.service.deleteNotice(id).subscribe((res)=>{
    console.log(res,'deleteres==>');
    alert("Record Deleted...");
      this.getAllData();
    
 
  });
} 

OnEdit(us:any,form:any){
   
  this.getparamid = us.id;
  console.log(this.getparamid);

  this.form.controls['subject'].setValue(us.subject);
  this.form.controls['message'].setValue(us.message);
  

 }
 NoticeUpdate(){
   console.log(this.getparamid);
   console.log(this.form.value,'updated');
   if(this.form.valid)
   {
     
     this.service.updateNotice(this.getparamid,this.form.value ).subscribe((res)=>{
       alert( 'Updated Successfully...');
       
         this.getAllData();
     });
   }
 }

 
//  get f(){
//   return this.myForm.controls;
// }
   
// onFileChange(event:any) {

//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     this.myForm.patchValue({
//       fileSource: file
//     });
//   }
// }

// submit(){
//   const formData = new FormData();
//   const headers = new HttpHeaders();
//   headers.append('Content-Type', 'multipart/form-data');
//   headers.append('Accept', 'application/json');
//   formData.append('media', this.myForm.value);
 
//   this.http.post('http://localhost:5500/create_notice', formData)
//     .subscribe(res => {
//       console.log(res);
//       alert('Uploaded Successfully.');
//     })
// }

}


    
 

