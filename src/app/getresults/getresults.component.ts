import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from '../Contacts';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-getresults',
  templateUrl: './getresults.component.html',
  styleUrls: ['./getresults.component.css']
})
export class GetresultsComponent implements OnInit {

  updatePressed:boolean=false;
  contacts:Contacts[];
  getresultsForm:FormGroup;
  constructor(private restService:RestServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getresultsForm= new FormGroup({
      id:new FormControl('')});
  }
  getResults(){
    this.updatePressed=true;
    this.restService.get(this.getresultsForm.get('id').value).subscribe(data => {
      this.contacts=data;
      if(data){
        this.router.navigateByUrl('/getResults');
      }
      else{
      }
    });
}
}
