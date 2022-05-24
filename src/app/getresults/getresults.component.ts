import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Contact } from '../Contact';
import { Contacts } from '../Contacts';
import { Contactsreturned } from '../Contactsreturned';
import { RestServiceService } from '../rest-service.service';


@Component({
  selector: 'app-getresults',
  templateUrl: './getresults.component.html',
  styleUrls: ['./getresults.component.css']
})
export class GetresultsComponent implements OnInit {

  @Input() data:string="";
  @Input() data2:string="";
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  getresultsForm:FormGroup;
  dataSource:Contacts[];
  displayedColumns: string[] = ['id'];
  contacts:Contacts[];
  sortedData:Contacts[];
  contacts2:Contactsreturned;
  event2:string="";
  companysearch:string="0";
  namesearch:string="";
  updatePressed:boolean=false;
  searchbyname:boolean=false;
  id:number=0;
 
  constructor(private restService:RestServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getresultsForm= new FormGroup({
      id:new FormControl('')});
      this.getResults();
  }
  
  getResults(){
    this.updatePressed=true;
    this.id=this.getresultsForm.get('id').value;
    this.restService.get(this.id).subscribe(data => {
      this.contacts2=data;
    });
  }

search(event:string){
  this.namesearch=event;
  if(this.companysearch=="0"){
    this.paginator.pageIndex=0;
    this.event2=event;
    if(this.event2!=""){
      this.searchbyname=true;
    }
    else{
    this.searchbyname=false;
    }
  this.restService.getBySearch(event+",0").subscribe(data =>{
    this.contacts2=data;
  }
  );}
  else{
    this.restService.getBySearchAndCompany(event+",0,"+this.companysearch).subscribe(data =>{
      this.contacts2=data;
  });
  }
}

searchCompany(event:string){
  if(this.namesearch==""){
    this.companysearch=event;
    this.paginator.pageIndex=0;
    if(event!="0"){
      this.event2=event;
      this.restService.getByCompany(event+",0").subscribe(data =>{
      this.contacts2=data;
      this.dataSource=this.contacts;
    });}
  else{
    this.event2=event;
    this.getResults();
  }
  }
  else{
  this.companysearch=event;
    if(event!="0"){
    this.restService.getBySearchAndCompany(this.namesearch+",0,"+event).subscribe(data =>{
    this.contacts2=data;
    this.dataSource=this.contacts;
    });
    }
    else{
    this.search(this.namesearch);
    }
  }
}
onPaginateChange(event){
  if(this.event2!="" && this.searchbyname==true){
    this.restService.getBySearch(this.event2+","+event.pageIndex).subscribe(data =>{
      this.contacts2=data;
      this.dataSource=this.contacts;
  });
  }
  else if(this.event2!=""){
    if(this.event2!="0"){
      this.restService.getByCompany(this.event2+","+event.pageIndex).subscribe(data =>{
        this.contacts2=data;
        this.dataSource=this.contacts;
      });}
      else{
        this.id=event.pageIndex;
        this.restService.get(this.id).subscribe(data => {
          this.contacts2=data;
          this.dataSource=this.contacts;
        });
      }
}
  
  
  
  
  else{
    
  this.id=event.pageIndex;
  this.restService.get(this.id).subscribe(data => {
    this.contacts2=data;
    this.dataSource=this.contacts;
    if(data){
      this.router.navigateByUrl('/getResults');
    }
    else{
    }
  });
}

}}