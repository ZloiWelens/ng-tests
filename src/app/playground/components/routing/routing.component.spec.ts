import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RoutingComponent} from './routing.component';
import {Subject} from 'rxjs';
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';

class RouterStub {
  navigate(path: string[]) {
  }
}

class ActivatedRoutedStub {
  private _subject = new Subject<Params>()

  push(params: Params) {
    this._subject.next(params)
  }

  get params() {
    return this._subject.asObservable()
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRoutedStub}
      ]
    })
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });


  it('should component navigate to posts if go back', () => {
    let router = TestBed.inject(Router)
    let spy = spyOn(router, 'navigate')

    component.goBack()

    expect(spy).toHaveBeenCalledWith(['/posts'])
  });

  it('should navigate 404 if id = 0', () => {
    let router = TestBed.inject(Router)
    let route: ActivatedRoutedStub = TestBed.get(ActivatedRoute)
    let spy = spyOn(router, 'navigate')

    route.push({id: '0'})

    expect(spy).toHaveBeenCalledWith(['/404'])
  });

  it('should router-outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet))

    expect(de).not.toBeNull()
  });
});
