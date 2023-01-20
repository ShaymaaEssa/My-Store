import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  @Output() cartProduct: EventEmitter<Product> = new EventEmitter;
  quantity:string = '1';
  options = [ // id field is not necessary
    {id: 1, value: '1'},
    {id: 2, value: '2'},
    {id: 3, value: '3'},
    {id: 4, value: '4'},
    {id: 5, value: '5'},
    {id: 6, value: '6'}
  ]
  constructor(private productservice:ProductsService) { 
    this.product={
      id : 1,
      name : "",
      price : 0,
      url : "",
      description: "",
      quantity:1
    }
  }

  ngOnInit(): void {
  }

  addToCart(product:Product):void{
    product.quantity = Number(this.quantity);
    this.cartProduct.emit(product);
  }

}
