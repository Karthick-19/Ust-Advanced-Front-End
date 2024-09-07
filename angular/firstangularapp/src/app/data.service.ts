import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = []
  constructor() {
    this.products[0] = new Product("s101", "Tata", "Nano car", 2, 200000)
    this.products[1] = new Product("s102", "Samsung", "Washing machine", 1, 40000)
    this.products[2] = new Product("s103", "Samsung", "Fridge", 1, 100000)
    this.products[3] = new Product("s104", "Oneplus", "TV", 1, 30000)
    this.products[4] = new Product("s105", "Haier", "Air conditioner", 2, 90000)
    this.products[5] = new Product("s106", "Durex", "King size bed", 1, 20000)
    this.products[6] = new Product("s107", "Sony", "PlayStation 5", 1, 50000);
    this.products[7] = new Product("s108", "Apple", "iPhone 13", 2, 80000);
    this.products[8] = new Product("s109", "Dell", "Laptop", 1, 60000);
    this.products[9] = new Product("s110", "LG", "Washing Machine", 1, 35000);
    this.products[10] = new Product("s111", "Nike", "Running Shoes", 3, 7000);
    this.products[11] = new Product("s112", "Panasonic", "Microwave Oven", 2, 15000);
    this.products[12] = new Product("s113", "Bose", "Bluetooth Speaker", 1, 12000);
    this.products[13] = new Product("s114", "JBL", "Headphones", 2, 8000);
    this.products[14] = new Product("s115", "Lenovo", "Desktop Computer", 1, 55000);
    this.products[15] = new Product("s116", "HP", "Printer", 1, 10000);

  }
  fetchData(): Product[] {
    return this.products
  }

}
