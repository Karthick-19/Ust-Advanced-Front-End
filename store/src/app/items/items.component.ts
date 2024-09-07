import { Component } from '@angular/core';
import { StoreserviceService } from '../storeservice.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';



@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  constructor(private service:StoreserviceService){}

  allItems:any[]=[]

  onSubmit(){
    this.service.getAllItems().subscribe((data)=>{
      this.allItems=data
    })
  }

}
