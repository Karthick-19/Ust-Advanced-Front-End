import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  } 

  @Input('carsInput')
  cars!:string[] 

  @Output() outputEvent:EventEmitter<string> = new EventEmitter<string>;

  checkLimit=false
  
  sendMessage(){
    if(this.cars.length > 5){
    this.outputEvent.emit("List is full..")
  }
}

}
