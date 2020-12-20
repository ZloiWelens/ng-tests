import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {
  defaultColor = 'red'
  defaultBorder = '2px solid black'
  @Input('appColor') color: string

  constructor(private _$el: ElementRef) {
  }

  ngOnChanges(): void {
    this._$el.nativeElement.style.backgroundColor = this.color || this.defaultColor
    this._$el.nativeElement.style.border = this.defaultBorder || ''
  }

}
