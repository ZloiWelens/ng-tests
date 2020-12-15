import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should inc for counter', () => {
    component.increment()
    expect(component.counter).toBe(11)
  });

  it('should decr for counter', () => {
    component.decrement()
    expect(component.counter).toBe(9)
  });

  it('should inc value by event emitter', () => {
    let result = undefined
    component.counterHandler.subscribe(value => result = value)

    component.increment()

    expect(result).toBe(11)
  });
});
