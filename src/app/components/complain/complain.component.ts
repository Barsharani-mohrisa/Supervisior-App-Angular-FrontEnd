import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import Pusher from 'pusher-js';
import {HttpClient} from "@angular/common/http";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {


  first_name = '';
  comment = '';
  closeResult: any;
  getparamid:any;
  id:any



  constructor(private service:ApiService,private modalService: NgbModal, private _location: Location,private http: HttpClient) { }

 
  totalLength:any;
  page:number=1;
 
  readData:any = [];
 
  map: any ={
    0: "Not Resolved",
    1: "Resolved"
  }
  



  ngOnInit(): void {
    this.getAllData();

    Pusher.logToConsole = true;

    const pusher = new Pusher('25291c0752d6089a660c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('comment', (data: any) => {
      this.readData.push(data);
    });
  }

  back(){
    this._location.back();
  }

   
  getAllData(){
    this.service.getComplain().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
      this.totalLength = (res.data).length;
    });
  }

  open(content: any,us:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.getparamid = us.id;
    console.log(this.getparamid)
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
handleInput(event: any) {
  this.comment = event.target.value;
}
  

  submit(): void {
    let ids = this.getparamid;

    this.http.put(`http://localhost:3000/complain/${ids}`, {
      first_name: this.first_name,
      comment: this.comment
    }).subscribe(() => this.comment = '');
  }
 
}