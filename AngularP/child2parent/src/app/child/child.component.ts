import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})


export class ChildComponent implements OnInit{
  childItem:string|undefined
  @Output()
  childEvent = new EventEmitter<string>();

  addChildren(){
    this.childEvent.emit(this.childItem);
    this.childItem=''
    this.products.push(this.product)
    console.log(this.products)
  }

  product!:Product

  products!:Product[]

  ngOnInit(): void {
    // this.product.id=101,
    this.product.name='Hp Keyboard',
    this.product.description='RGB Backlight keyboard',
    this.product.price=900
    this.product.category='Laptop Accesory'
  }

}
class Product{
id!: number;
name!: string;
description!: string;
price!: number;
category!: string;
}

