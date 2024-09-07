import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  parentData1!:string
  @Input()
  parentData2!: number
  @Input()
  parentData3!:string

  value=""
  sendData(value:string){
    this.value = value
  }
  

}
