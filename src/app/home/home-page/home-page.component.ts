import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loggedInUser: string;
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }
  loggedin()
  {
    this.loggedInUser = sessionStorage.getItem('token');
    return this.loggedInUser;
  }
  onClick(){
    this.alertify.error('You need to login first');
  }
}
