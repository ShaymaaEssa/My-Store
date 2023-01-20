import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product;
  products:Product[] = [];
  quantity:string = '1';
  options = [ // id field is not necessary
    {id: 1, value: '1'},
    {id: 2, value: '2'},
    {id: 3, value: '3'},
    {id: 4, value: '4'},
    {id: 5, value: '5'},
    {id: 6, value: '6'}
  ]
  constructor(private productservice: ProductsService, private route:ActivatedRoute) { 
    this.product={
    id : 1,
    name : "",
    price : 0,
    url : "",
    description: "",
    quantity:1
  }}

  ngOnInit(): void {

    this.getProductById();
  }

  addToCart(product:Product){
    product.quantity = Number(this.quantity);
    this.productservice.addToCart(product);
    alert('Added to cart!')
  }

  getProductById(): void
{
    var index = 0;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productservice.getProducts().subscribe(res=>{
    this.products = res;
    index = this.products.findIndex(x=>x.id === id);
    this.product = this.products[index];
    });
    
}
}
