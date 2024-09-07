import { Component,OnChanges,OnInit, SimpleChanges,DoCheck, Input,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit{
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called..')
  }

  @Input() display!:string
  val!:string
  //Will only work for @Input not work for normal tags within the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    // if (changes['display']) {
    //   const change = changes['value'];
    //   this.previousValue = change.previousValue;
    //   console.log('Value changed from', change.previousValue, 'to', change.currentValue);
    // }
    console.log('OnChange() called')
  }
  ngOnInit(): void {
    this.val="Component Created (onInit)"
  }

  previousN: number | null = null;

  private lastValue: number | null = null;
  n = 0
  onIncrease(){
    this.n++;
  }

  valueDiffer!:any

  // ngDoCheck(): void {
  //   console.log(changes)
  // }
  ngDoCheck(): void {
    if (this.lastValue !== null && this.lastValue !== this.n) {
      this.previousN = this.lastValue;
    }
    this.lastValue = this.n;
    console.log('DoCheck() called..')
  }

}
