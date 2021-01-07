import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://codingthailand.com/api/get_courses.php';
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
