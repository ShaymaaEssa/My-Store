import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.css']
})
export class ConfirmationFormComponent implements OnInit {

  userFullName:string="";
  totalcost:number = 0;
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.userFullName = this.productservice.getUserFullName();
    this.totalcost = this.productservice.getTotalCost();
  }



}
