import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 



@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    if(localStorage.getItem("authValue")=='0'){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view All Listing",{cssClass: 'alert-danger', timeout: 3000});
    }
  }
}
