import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceAdjust',
})
export class PriceAdjustPipe implements PipeTransform {
  transform(value: number): number {
    let tempNumber: number = Math.trunc(value);
    let decimals: number = Math.trunc((value - Math.trunc(value)) * 100);
    if (decimals > 50) tempNumber = Math.ceil(value);
    else if (decimals < 50 && decimals > 0)
      tempNumber = Math.trunc(value) + 0.5;
    return tempNumber;
  }
}
