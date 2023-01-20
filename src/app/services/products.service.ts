import { Injectable } from '@angular/core';
import { Product } from '../Model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartItems:Product[] = [];
  userFullName :string = '';
  

  
  constructor(private httpclient:HttpClient) { }
  getProducts(): Observable<any> {
    return this.httpclient.get('./assets/data.json');

  }

  addToCart(product:Product){
    if (this.cartItems.findIndex(x=>x.id === product.id)>=0){
      var index = this.cartItems.findIndex(x=>x.id === product.id);
      this.cartItems[index].quantity += product.quantity; 
    }
    else this.cartItems.push(product);
  }

  getCartProducts(){
    return this.cartItems;
  }

  updateAmount(amount:number, id:number){
    var index = 0;
    index = this.cartItems.findIndex(x => x.id === id);
    if (amount == 0){
      this.cartItems.splice(index,1);
      alert('removed from your cart!');
    }

    else {
      this.cartItems[index].quantity = amount;
    }
  }

  getTotalCost(){
    var totalcost = 0;
    for (var i =0;i<this.cartItems.length;i++){
      totalcost += this.cartItems[i].quantity * this.cartItems[i].price;
    }
    return totalcost;
  }

  setUserFullName(fullname:string){
    this.userFullName = fullname;
  }
  getUserFullName(){
    return this.userFullName;
  }


}
