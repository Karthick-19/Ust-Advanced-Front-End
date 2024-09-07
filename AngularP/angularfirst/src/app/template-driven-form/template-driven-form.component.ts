import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit{

  onSubmit(form:any){
    console.log(form.value)
    this.contacts.push(this.contact)
    // form.resetForm()
    this.contact = this.createEmptyContact();

  }
  
  contact!:Contact

  contacts:Contact[] = []

  // here it means the contact object whcih is associated with form will be initialized once the component is created
  ngOnInit(): void {
    this.contact={
      name:'Cruze',
      email:'cruze@mail.com',
      newsletter:true,
      gender:'male',
      address:{
        street:'gobaal',
        city:'Salem',
        state:'TN'
      }
    }
  }

  // Method to create an empty Contact object
  createEmptyContact(): Contact {
    return {
      name: '',
      email: '',
      newsletter: false,
      gender: '',
      address: {
        street: '',
        city: '',
        state: ''
      }
    };
  }
}


class Contact{
  name!:string
  email!:string
  newsletter!:boolean
  gender!:string
  address!:{
    street:string
    city:string
    state:string
  }
}
