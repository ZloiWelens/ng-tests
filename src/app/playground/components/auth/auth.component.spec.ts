import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthComponent} from './auth.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [AuthComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form controls', () => {
    expect(component.form.contains('login')).toBeTruthy()
    expect(component.form.contains('password')).toBeTruthy()
  });

  it('should form invalid if empty value', () => {
    const control = component.form.get('login')
    control.setValue('')
    expect(control.valid).toBeFalsy()
  });
});
