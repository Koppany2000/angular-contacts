import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-deletecontact',
  templateUrl: './deletecontact.component.html',
  styleUrls: ['./deletecontact.component.css']
})
export class DeletecontactComponent implements OnInit {

  deleteForm: FormGroup;
  deleted:boolean=false;
  constructor(private restService:RestServiceService, private router:Router,private route:ActivatedRoute) {  }

  ngOnInit(): void {
    this.deleteForm= new FormGroup({
      id:new FormControl(this.route.snapshot.paramMap.get('id'))});

  }
  deleteContact(){
    
    this.deleted=true;
    this.restService.delete(this.deleteForm.get('id').value).subscribe(data => {
      if(data){
        this.router.navigateByUrl('/getResults');
      }
      else{
        return;
        
      }
    },(error) =>{console.error('error caught')
    this.router.navigateByUrl('/error/'+2) });
  

}
cancel(){
    
}

}
