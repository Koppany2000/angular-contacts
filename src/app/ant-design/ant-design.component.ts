import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../Contacts';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-ant-design',
  templateUrl: './ant-design.component.html',
  styleUrls: ['./ant-design.component.css']
})
export class AntDesignComponent implements OnInit {

  contacts:Contacts[];
  constructor(private restService:RestServiceService,private router:Router) { }
  listOfColumn = [
    {
      title: 'Id',
      compare: (a: Contacts, b: Contacts) => a.id-b.id,
      priority: false
    },
    {
      title: 'FullName',
      compare: (a: Contacts, b: Contacts) => a.fullName.localeCompare(b.fullName),
      priority: 3
    },
    {
      title: 'CompanyName',
      compare: (a: Contacts, b: Contacts) => a.companyName.localeCompare(b.companyName),
      priority: 2
    },
    {
      title: 'Email',
      compare: (a: Contacts, b: Contacts) => a.email.localeCompare(b.email),
      priority: 1
    },
    {
      title: 'PhoneNumber',
      compare: (a: Contacts, b: Contacts) => a.phoneNumber.localeCompare(b.phoneNumber),
      priority: 1
    }
  ];

  ngOnInit(): void {
    
    this.getResults();
    

    
    
  }

  getResults(){
  
    this.restService.getAll().subscribe(data => {
     
      this.contacts=data;
     
    });
    
  }

  
  

}

