import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Contact } from '../Contact';
import { Contacts } from '../Contacts';
import { RestServiceService } from '../rest-service.service';


@Component({
  selector: 'app-getresults',
  templateUrl: './getresults.component.html',
  styleUrls: ['./getresults.component.css']
})
export class GetresultsComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort;
  dataSource:Contacts[];
  @Input() data:string="";
  @Input() data2:string="";
  updatePressed:boolean=false;

  event2:string="";
  contacts:Contacts[];
  getresultsForm:FormGroup;
  displayedColumns: string[] = ['id'];
  id:number=0;
  constructor(private restService:RestServiceService,private router:Router) { }

  sortedData:Contacts[];
  ngOnInit(): void {
    this.getresultsForm= new FormGroup({
      id:new FormControl('')});
      this.getResults();

    
  }
 
  getResults(){
    this.updatePressed=true;
    this.id=this.getresultsForm.get('id').value;
    this.restService.get(this.id).subscribe(data => {
      this.contacts=data;
      this.dataSource=this.contacts;
      if(data){
        this.router.navigateByUrl('/getResults');
      }
      else{
      }
    });
}

search(event:string){
  this.event2=event;
 this.restService.getBySearch(event+",0").subscribe(data =>{
  this.contacts=data;
  this.dataSource=this.contacts;
  if(data){
    this.router.navigateByUrl('/getResults');
  }
  else{
  }
}
 );
  

}
searchCompany(event:string){
  if(event!="0")
  {
  this.event2=event;
  this.restService.getByCompany(event+",0").subscribe(data =>{
    this.contacts=data;
    this.dataSource=this.contacts;
    if(data){
      this.router.navigateByUrl('/getResults');
    }
    else{
    }
  }
   );
}else{
  this.getResults();
}

}

onPaginateChange(event){
  if(this.event2!=""){
  
 this.restService.getBySearch(this.event2+","+event.pageIndex).subscribe(data =>{
  this.contacts=data;
  this.dataSource=this.contacts;
  if(data){
    this.router.navigateByUrl('/getResults');
  }
  else{
  }
}
 );
  }
  else{
  this.id=event.pageIndex;
  this.restService.get(this.id).subscribe(data => {
    this.contacts=data;
    this.dataSource=this.contacts;
    if(data){
      this.router.navigateByUrl('/getResults');
    }
    else{
    }
  });
}

}}

