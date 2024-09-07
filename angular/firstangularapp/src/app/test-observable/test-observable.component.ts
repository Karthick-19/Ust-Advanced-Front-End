import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css'
})
export class TestObservableComponent {

  invoke(){
    let observable:Observable<object>=this.createObservable();
    this.subscriveToObservable(observable)
  }
  createObservable():Observable<Object>{
    return  new Observable((obs)=>{
      setTimeout(()=>{
        (obs.next('Hello'))
      },1000)
      setTimeout(()=>{
        (obs.next('Welcome'))
      },2000)
      setTimeout(()=>{
        (obs.next('Asynchronus'))
      },3000)
      setTimeout(()=>{
        (obs.next('Communication'))
      },4000)
 
    })
}

subscriveToObservable(observable: Observable<object>){
    observable.subscribe((data)=>{
        console.log('from subscriber',data);
    })
}

}
