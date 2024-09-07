import { Component } from '@angular/core';
// import { DataService } from '../data.service';
import { Product } from '../Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
  
})
export class DataComponent {
onSubmit() {
console.log(this.product)
this.products.push(this.product)
}
  product: Product = new Product();
  products: Product[] = [];
  brand:string[] = []
  // constructor(private dataService:DataService){
  //   // this.product = new Product();
  //   this.products = dataService.fetchData();
  //   for(let product of this.products){
  //     if(!this.brand.includes(product.brand)){
  //       this.brand.push(product.brand)
  //     }
  //   }
  // }
  filterValue = 1000000
  filterBrand="all"
  enablePriceFilter = false
  enableBrandFilter = false
  toDate = new Date
  money = 199
  sample = 'Welcome to Angular'
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
