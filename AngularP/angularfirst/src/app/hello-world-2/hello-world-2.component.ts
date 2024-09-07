import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hello-world-2',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './hello-world-2.component.html',
  styleUrl: './hello-world-2.component.css'
})
export class HelloWorld2Component {
  name = 'Karthick'

  clickCount = 0

  clickMeIncrease(){
    this.clickCount++;
  }

  clickMeDecrease(){
    this.clickCount--;
  }

  value = ''
  handleInput(event:any){
    this.value= event.target.value
  }
  
  movies = ["Fight club","La la land","End game","Spiderman no way home","Vagai suda va"]

  num = 0

  allowed = true

  color = 'red'

  isHovering = false

  toDate = new Date

  message = 'Welcome to Angular'

  price = 200
}
