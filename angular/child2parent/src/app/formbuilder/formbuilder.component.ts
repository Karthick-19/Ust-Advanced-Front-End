import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,FormBuilder, Validators, FormGroup, FormArray, Form } from '@angular/forms';
import { Product } from '../Product';
@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent  {

  // // [x:string]:any
  // productForm!:FormGroup;
  // product:Product = new Product('','','',0,0)

  // constructor(private formBuilder: FormBuilder) {
  // this.productForm =   this.formBuilder.group({
  //   productId: [, [Validators.required, Validators.minLength(5)]],
  //   brand: [''],
  //   description: this.formBuilder.group({
  //     age: [0],
  //     seasons: [''],
  //   }),
  //   quantity: [0],
  //   price: [0],
  //   suppliers:this.formBuilder.array([
  //     this.formBuilder.control('')
  //   ])
  // });}


  // ngOnInit(): void {
  // }

  // onSubmit(){
  //   console.error(this.productForm)
  //   console.warn(this.productForm.value)
  //   // console.log(this.productForm.controls['suppliers'].controls['0'].value)
  //   console.log((this.productForm.get('suppliers') as FormArray).controls['0'].value)
  //   this.product.productId=this.productForm.controls['productid'].value!
  //   console.log('from product:',this.product.productId)
  // }

  // addNewSupplier(){
  //   this.suppliers.push(this.formBuilder.control(''))
  //   console.log(this.suppliers.value)
  // }

  // get suppliers(){
  //   return this.productForm.get('suppliers') as FormArray
  // }
}

