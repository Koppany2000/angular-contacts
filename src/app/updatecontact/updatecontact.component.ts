import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../Contact';
import { RestServiceService } from '../rest-service.service';
import { UpdatePayload } from '../update.payload';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {


  updateForm: FormGroup;
  @Input('con')
  contact2:Contact;
  updatePayload:UpdatePayload;
  contact:Contact;
  constructor(private restService:RestServiceService,private router:Router,private route:ActivatedRoute) {
    this.updatePayload={
      id:null,
      firstName:'',
      lastName:'',
      companyId:0,
      email:'',
      phoneNumber:'',
      comment:''
    }
   }


  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('name')!=null){
    this.updateForm= new FormGroup({
      id:new FormControl(this.route.snapshot.paramMap.get('id')),
      firstName:new FormControl(this.route.snapshot.paramMap.get('name').split(" ")[0]),
      lastName:new FormControl(this.route.snapshot.paramMap.get('name').split(" ")[1]),
      companyId:new FormControl(null),
      email:new FormControl(this.route.snapshot.paramMap.get('email')),
      phoneNumber:new FormControl(this.route.snapshot.paramMap.get('phoneNumber')),
      comment:new FormControl(''),
    })
  }
  else if(this.route.snapshot.paramMap.get('fname')!=null){
    this.updateForm= new FormGroup({
      id:new FormControl(this.route.snapshot.paramMap.get('id')),
      firstName:new FormControl(this.route.snapshot.paramMap.get('fname')),
      lastName:new FormControl(this.route.snapshot.paramMap.get('lname')),
      companyId:new FormControl(null),
      email:new FormControl(this.route.snapshot.paramMap.get('email')),
      phoneNumber:new FormControl(this.route.snapshot.paramMap.get('phoneNumber')),
      comment:new FormControl(''),
    })


  }else{
    this.updateForm= new FormGroup({
      id:new FormControl(''),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      companyId:new FormControl(null),
      email:new FormControl(''),
      phoneNumber:new FormControl(''),
      comment:new FormControl(''),
    })

  }
  }

  update(){
    this.updatePayload.id=this.updateForm.get('id').value;
    this.updatePayload.firstName=this.updateForm.get('firstName').value;
    this.updatePayload.lastName=this.updateForm.get('lastName').value;
    this.updatePayload.companyId=this.updateForm.get('companyId').value;
    this.updatePayload.email=this.updateForm.get('email').value;
    this.updatePayload.phoneNumber=this.updateForm.get('phoneNumber').value;
    this.updatePayload.comment=this.updateForm.get('comment').value;
    
    
    this.restService.update(this.updatePayload).subscribe(data => {


      this.contact=data;

      if(data){
        this.router.navigateByUrl('/getSingle/'+this.contact.id);
      }
      else{
        
      }
    },(error) =>{console.error('error caught')
    this.router.navigateByUrl('/error/'+1)});

  }

}
