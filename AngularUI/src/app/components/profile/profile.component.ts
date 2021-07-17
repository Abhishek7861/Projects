import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    if(localStorage.getItem("authValue")=='0'){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view Profile",{cssClass: 'alert-danger', timeout: 3000});
    }
  }

}
