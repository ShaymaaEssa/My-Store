import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  cartProducts : Product[] = [];

  fullname:string='';
  address:string='';
  creditcard:string='';

  
  constructor(private productservice:ProductsService, public route:Router) { }

  ngOnInit(): void {
    this.cartProducts = this.productservice.getCartProducts();

  }

  getTotalCost(){
    return this.productservice.getTotalCost();
  }

  //change amount of product
  onChange(event: any, id:number) {
    this.productservice.updateAmount(event.target.value, id);
    this.cartProducts = this.productservice.getCartProducts();
    
}

onSubmit():void{
  
    this.productservice.setUserFullName(this.fullname);
    this.route.navigate(['/confirmationform'])


  
}

validateName(){
  if (this.fullname.length<2)
    alert('min length of name must be 3 characters!');
}


}
