import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../Contact';
import { Contacts } from '../Contacts';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-getsingle',
  templateUrl: './getsingle.component.html',
  styleUrls: ['./getsingle.component.css']
})
export class GetsingleComponent implements OnInit {

  singleForm: FormGroup;
  contact:Contact;

  constructor(private restService:RestServiceService, private router:Router) {  }

  ngOnInit(): void {
    this.singleForm= new FormGroup({
      id:new FormControl('')});

      this.getSingle();
  }

  getSingle(){
    
    
    
    this.restService.getSingle(this.singleForm.get('id').value).subscribe(
      (response:Contact)=> {
        this.contact=response;
        console.log(response)
        console.log(this.contact.firstName);
    
      }
    );

      
}

}
