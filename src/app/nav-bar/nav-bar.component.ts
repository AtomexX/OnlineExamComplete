import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private adminUser: string="admin@lntinfotech.com";
  loggedInUser: string;
  constructor(private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  loggedin()
  {
    this.loggedInUser = sessionStorage.getItem('userName');
    return this.loggedInUser;
  }
  adminLoggedin()
  {
    this.loggedInUser = sessionStorage.getItem('userName');
    if(this.loggedInUser == this.adminUser )
    {return this.loggedInUser;}
    else{
      return false;
    }
  }
   
  onLogout()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userName');
    this.alertify.success('Logged out Successfully');
    this.router.navigate(['/']);

  }
}
