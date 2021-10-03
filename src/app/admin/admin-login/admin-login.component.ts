import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminId: string= "admin@lntinfotech.com"
  pass: string="lntinfotech"
  siteKey: string;
  constructor(private alertify: AlertifyService,
              private router: Router) {}

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    if(loginForm.value.AdminID === this.adminId && loginForm.value.password === this.pass
      )
    {
      sessionStorage.setItem('token', loginForm.value.AdminID);
      //localStorage.setItem('userEmail', loginForm.value.AdminID);
      sessionStorage.setItem('userName', loginForm.value.AdminID);
      
      this.alertify.success('Admin login Successful');
      this.router.navigate(['/admin/admin-profile']);
    }
    else{
      this.alertify.error("Incorrect Crediatials");
    }

  }
  ngOnInit() {
    
    this.siteKey='6Ld73J8cAAAAAMwmMtbmCZBsSdinocVrjBanC_UX';
               
  }

}
