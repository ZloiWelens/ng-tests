import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RoutingComponent} from './routing.component';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Test} from 'tslint';

class RouterStub {
  navigate(path: any[]) {
    return path
  }
}

class ActivatedRoutedStub {
  params: Observable<Params>
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRoutedStub},
      ]
    })
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
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
});
