import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router:Router,private authService: AuthService,private route:ActivatedRoute) { }
  error:string;

  ngOnInit(): void {
    this.error=this.route.snapshot.paramMap.get('id');
  }

  click(){
   
    this.authService.logout;
    this.router.navigateByUrl("/login")
    
    
  }
  click2(){
   
    this.authService.logout;
    this.router.navigateByUrl("/update")
    
    
  }
  click3(){
   
    this.authService.logout;
    this.router.navigateByUrl("/delete")
    
    
  }
  click4(){
   
    this.authService.logout;
    this.router.navigateByUrl("/post")
    
    
  }

}
