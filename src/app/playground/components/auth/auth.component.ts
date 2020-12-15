import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

}
