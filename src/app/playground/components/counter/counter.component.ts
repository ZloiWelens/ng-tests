import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counter: number = 10

  @Output() counterHandler = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit(): void {
  }

  public increment() {
    this.counter++;
    this.counterHandler.emit(this.counter)
  }

  public decrement() {
    this.counter--;
  }

}
