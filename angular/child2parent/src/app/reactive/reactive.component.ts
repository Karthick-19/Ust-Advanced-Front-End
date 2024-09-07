import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  productForm = new FormGroup({
    productId:new FormControl(0,[Validators.required,Validators.min(1)]),
    brand:new FormControl('',Validators.maxLength(20)),
    description:new FormControl(''),
    quantity:new FormControl(0),
    price:new FormControl(0)
  })

  onSubmit(){
    console.error(this.productForm)
    console.warn(this.productForm.value)
    
  }


}
