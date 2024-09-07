import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  saveProduct(product: Product) {
    let url = 'http://localhost:4444/api/products/createProduct';
    this.http.post(url, product).subscribe();
  }

  fetchall():Observable<Object>{
    let url = 'http://localhost:4444/api/products/allProducts';
    return this.http.get(url);
  }

  fetchbyId(id:number):Observable<Object>{
    let url = `http://localhost:4444/api/products/singleProduct/${id}`
    return this.http.get(url)
  }

  deletebyId(id:number):Observable<Object>{
    let url = `http://localhost:4444/api/products/deleteProduct/${id}`
    return this.http.delete(url, { responseType: 'text' }); // Specify responseType as 'text'
  }
}
  