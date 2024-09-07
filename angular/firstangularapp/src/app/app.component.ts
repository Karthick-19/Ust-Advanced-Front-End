import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { MycomponentComponent } from './mycomponent/mycomponent.component';
// import { FormComponent } from './form/form.component';
// import { DataComponent } from './data/data.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
// import { FormWComponent } from './form-w/form-w.component';
import { FormComponent } from './form/form.component';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { TokenComponent } from './token/token.component';
import { ExternalApiComponent } from './external-api/external-api.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveComponent,FormComponent,HttpClientModule,TokenComponent,LifecycleComponent,ExternalApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Karthick';
  location = "Salem";
  productId = 101;
  productName = "Nike Air"
  productPrice = "39999"
  availability = true
  quantity = 100
  orderQuantity = 0
  // orderable = this.orderQuantity <= this.quantity ? true : false
  deliveryColor = 'red'
  printOrder() {
    console.log(this.orderQuantity + " orders placed")
  }
  isOrderQuantityAvailable = true
  orderDate: Date = new Date();
  data!:string

  onSubmit(){
    this.data=this.title
  }
}
