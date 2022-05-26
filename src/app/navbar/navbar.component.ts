import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

public vertical=true;
  

  constructor(public authService:AuthService) { 
    
    
  }

  ngOnInit(): void {
    
  }

  change(){
    this.vertical=!this.vertical;
    
  }

}
