import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
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
  updatePressed:boolean=false;

  constructor(private restService:RestServiceService, private router:Router) {  }

  ngOnInit(): void {
    this.singleForm= new FormGroup({
      id:new FormControl('')});

    
  }

  getSingle(){
    
    this.updatePressed=true;
    
    this.restService.getSingle(this.singleForm.get('id').value).subscribe(
      (response:Contact)=> {
        this.contact=response;
      
    
      }
    );
}

}
