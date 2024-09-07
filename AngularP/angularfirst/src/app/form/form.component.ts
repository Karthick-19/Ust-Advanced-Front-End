import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  cars:string[] = []
  car = ""
  onSubmit(){
    if(!this.cars.includes(this.car)){
      this.cars.push(this.car)
    }
    this.car=''
  }
  value:string = ''
  receiveData(val:string){
    this.value=val
  }
}
