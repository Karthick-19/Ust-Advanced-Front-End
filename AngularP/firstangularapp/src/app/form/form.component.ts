import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../Product';
import { ProductServiceService } from '../product-service.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';




@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // loginData:object = {'',}
  borderHover: boolean = false


  // product: {productId:string,description:string,brand:string,category:string} = {productId:'',description:'',brand:'',category:''}
  product: Product = new Product()
  products: any = []
  productById: any = []
  productByIdDelete: any = []

  constructor(private productService: ProductServiceService) {
  }

  OnSubmit() {
    this.productService.saveProduct(this.product)
  }

  fetchAll() {
    this.productService.fetchall().subscribe((data) => {
      this.products = data
    })
  }

  id!: number

  fetchById() {
    this.productService.fetchbyId(this.id).subscribe((data) => {
      this.productById = data
    })
  }

  deleteById() {
    this.productService.deletebyId(this.id).subscribe(
      (data: any) => {
        this.productByIdDelete = data;
        console.log(data)
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  

}
