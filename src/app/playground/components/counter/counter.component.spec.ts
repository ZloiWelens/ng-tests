import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterComponent} from './counter.component';
import {By} from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })

    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
  }));

  it('should be created' , () => {
    expect(component).toBeDefined()
  })

  it('should render counter props' , () => {
    component.counter = 20

    fixture.detectChanges()

    let de = fixture.debugElement.query(By.css('p'))
    let el: HTMLElement = de.nativeElement
    expect(el.textContent).toContain('20')
  })

});
