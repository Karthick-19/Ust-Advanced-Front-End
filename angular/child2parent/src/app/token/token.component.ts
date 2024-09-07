import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TokenServiceService } from '../token-service.service';
import { Details } from '../../Details';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css'
})
export class TokenComponent {
  username!:string
  passowrd!:string

  detail: Details = new Details()

  constructor(private tokenService:TokenServiceService){}

  jwt!:string
  // token!:string

  onSubmit(){
    this.tokenService.sendDetails(this.detail).subscribe((response:any)=>{
    console.log(response); 
      this.jwt = response.jwt;
      console.log(this.jwt)
      // other method if we simply pass as data
      // console.log(data)
      // this.jwt=data['jwt']
    }) 
  }

  sendAuthHeader(){
    this.tokenService.sendAuthRequest(this.jwt).subscribe((data)=>{
      console.log(data)
    })
  }
}

