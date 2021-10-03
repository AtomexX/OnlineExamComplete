import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  siteKey: string;
  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router ) { }

  ngOnInit() {    
    this.siteKey='6Ld73J8cAAAAAMwmMtbmCZBsSdinocVrjBanC_UX';              
  }
  
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    
    this.authService.authUser(loginForm.value).subscribe(
      (response) =>{
        console.log(response);
        const userEmail = (<any>response).Email;
        const Name = (<any>response).UserName;
        sessionStorage.setItem('token', userEmail);
        
        sessionStorage.setItem('userName', Name);
        this.alertify.success('login Successful');
        this.router.navigate(['/']);
      },error =>{
        console.log(error);
        this.alertify.error("Invalid");
      }
    );    
  }
}
