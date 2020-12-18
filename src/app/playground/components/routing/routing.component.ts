import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if (params['id'] == '0') this._router.navigate(['/404'])
    })
  }

  goBack() {
    this._router.navigate(['/posts'])
  }

}
