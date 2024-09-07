import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-mycomponent',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mycomponent.component.html',
  styleUrl: './mycomponent.component.css'
})
export class MycomponentComponent {
  quantity = 0
  available = 100
  isOrderable(){
    if(this.quantity > this.available)
      return false;
    return true
  }
  orderPlaced = this.isOrderable();

  handleClick(quantity: any){
    alert(quantity);
  }
  change = true

  country = ""

  message = ""

  handleSubmit(message:string){
    this.message =  message
  }

  darkMode: boolean = false;

  setDarkMode(){
    this.darkMode = !this.darkMode
  }

  movies = ["Fight club","La la land","End game","Spiderman no way home","Vagai suda va"]
  
}
