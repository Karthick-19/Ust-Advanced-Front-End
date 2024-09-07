import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ChildComponent, AboutComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parent2child';

  EnterName='Cruze'
  EnterAge=20
  EnterStatus='Single'
  parentData1 = ''
  parentData2:number = 0
  parentData3 = ''

  transferData(){
    this.parentData1=this.EnterName
    this.parentData2=this.EnterAge
    this.parentData3=this.EnterStatus
    this.EnterName=''
    this.EnterAge=0
    this.EnterStatus=''
  }

  value=""
  sendData(value:string){
    this.value = value
  }

}
