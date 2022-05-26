import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../Data';
import { Graphql } from '../Graphql';
import { GraphResponse } from '../GraphResponse';
import { RestServiceService } from '../rest-service.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {

  graphForm: FormGroup;
  buttonPressed:boolean=false;

  graphresponse:GraphResponse;
  graphdata:Data;
  graph:Graphql;
  filled=false;
  constructor(private restService:RestServiceService, private router:Router,private message:NzMessageService) { }

  ngOnInit(): void {

    this.graphForm= new FormGroup({
      query:new FormControl('')});
  }

  isFilled(){
    if(this.graphForm.get('query').value!="")
    {
      console.log(this.graphForm.get('query').value)
    this.filled= true;
    }
    else
    this.filled=false;
      
  }
  getGraphQL(){
    this.buttonPressed=true;
    this.isFilled();
    this.restService.getGraphQL(this.graphForm.get('query').value).subscribe(
      (response:GraphResponse)=> {
        
        this.graphresponse=response;
        if(this.graphresponse!=null)
          this.createMessage();
        
    
      }
      
    );
    

    
    
   
   

    
}
createMessage(): void {
  this.message.create('success', `Success`);
}

}
