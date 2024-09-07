import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExternalserviceService } from '../externalservice.service';
import { source } from '../source';

@Component({
  selector: 'app-external-api',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './external-api.component.html',
  styleUrl: './external-api.component.css'
})
export class ExternalApiComponent {

  constructor(private services:ExternalserviceService){}

  data:source = new source()
  datas!:any
  onSubmit(){
    this.services.fetchall().subscribe((data)=>{
      console.log(data)
      this.datas = data
      // this.datas = data
    })
  }

}
