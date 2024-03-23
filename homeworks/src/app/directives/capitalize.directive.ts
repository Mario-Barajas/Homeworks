import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[CapitalizeDirective]',
})
export class CapitalizeDirectiveDirective {
  constructor(private readonly element: ElementRef) {
    this.element.nativeElement.style.textTransform = 'capitalize';
  }
}
