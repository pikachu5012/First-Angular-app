import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  host: {
    '(mouseover)': 'onMouseOver()',
    '(mouseout)': 'onMouseOut()'
  }
})
export class Shadow {

  constructor(private e: ElementRef) {}

  onMouseOver(){
    this.e.nativeElement.classList.add("shadow-lg", "bg-body", "rounded");
  }
  onMouseOut(){
    this.e.nativeElement.classList.remove("shadow-lg", "bg-body", "rounded");
  }
}
