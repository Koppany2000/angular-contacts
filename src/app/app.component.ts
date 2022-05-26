import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  vertical:boolean;

  title = 'angular-contacts';


  changeVertical(){
    this.vertical=!this.vertical;
    localStorage.setItem('vertical', this.vertical.toString());
  }

  getVertical(){
    if(localStorage.getItem('vertical')=="true"){
      return true;
    }
    else
    return false;
    
  }
  

}