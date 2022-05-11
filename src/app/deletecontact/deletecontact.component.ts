import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-deletecontact',
  templateUrl: './deletecontact.component.html',
  styleUrls: ['./deletecontact.component.css']
})
export class DeletecontactComponent implements OnInit {

  deleteForm: FormGroup;
  constructor(private restService:RestServiceService, private router:Router) {  }

  ngOnInit(): void {
    this.deleteForm= new FormGroup({
      id:new FormControl('')});

  }

  deleteContact(){
    
    
    
    this.restService.delete(this.deleteForm.get('id').value).subscribe(data => {
      if(data){
        this.router.navigateByUrl('/getResults');
      }
      else{
        
      }
    });

}
}
