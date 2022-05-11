import { Component, OnInit } from '@angular/core';
import { Contacts } from '../Contacts';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-getresults',
  templateUrl: './getresults.component.html',
  styleUrls: ['./getresults.component.css']
})
export class GetresultsComponent implements OnInit {

  contacts:Contacts[];
  constructor(private restService:RestServiceService) { }

  ngOnInit(): void {
    this.get();
  }

  public get():void{
    this.restService.get().subscribe(
      (response:Contacts[])=> {
        this.contacts=response;
      }
    );

  }

}
