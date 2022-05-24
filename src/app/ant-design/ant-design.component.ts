import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../Contacts';
import { RestServiceService } from '../rest-service.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-ant-design',
  templateUrl: './ant-design.component.html',
  styleUrls: ['./ant-design.component.css']
})
export class AntDesignComponent implements OnInit {


  contacts:Contacts[];
  searchValue = '';
  
  visible=false;
  contacts2:Contacts[];
  listOfFilter: NzTableFilterList;
  constructor(private restService:RestServiceService,private router:Router,private notification: NzNotificationService) { }
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
      priority: 2,
      filterMultiple: true,
      listOfFilter: [
        { text: 'Company #1', value: 1 },
        { text: 'Company #2', value: 2 },
        { text: 'Company #3', value: 3 }
      ],
      filterFn: (list: string[], item: Contacts) => list.some(name => item.companyName.indexOf(name) !== -1)
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
    /*
    this.createBasicNotification('bottomLeft');
    this.createBasicNotification('bottomLeft');
    this.createBasicNotification('bottomRight');
    this.createBasicNotification('topLeft');
    this.createBasicNotification('bottomLeft');
    this.createBasicNotification('topRight');
    */
    
    
  }
  
  createBasicNotification(position: NzNotificationPlacement): void {
    this.notification.blank(
      'Hírdetés',
      'Hírdetés hírdetés hírdetés.',
      { nzPlacement: position,nzDuration: 0 }
    );
  }
  
  getResults(){
  
    this.restService.getAll().subscribe(data => {
     
      this.contacts=data;
      this.contacts2=this.contacts;
     
    });
    
  }
  reset(): void {
    this.searchValue = '';
   
    this.search();
  }
  search(): void {
    this.visible = false;
    this.contacts = this.contacts.filter((item: Contacts) => item.fullName.indexOf(this.searchValue) !== -1);
  }

  
  

}

