import { ProductService } from './shared/product.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  private products : Product[];

  constructor(
    private title: Title ,
    private productService : ProductService) { 

  }

  ngOnInit() {
    this.title.setTitle("Products")
    
    this.reloadProduct();
  }

  private reloadProduct(){
    this.productService.getProducts().subscribe(

      (productsData) => { //productsData คือ object ที่รับข้อมูลมา
        this.products = productsData;
      }
    );
  }

}
