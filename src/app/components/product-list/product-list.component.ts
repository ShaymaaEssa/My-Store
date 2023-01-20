import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(res=>{
      this.products = res;
    });
  }

  addToCart(product:Product):void{
    this.productservice.addToCart(product);
    alert('Added to cart!')
  }

}
