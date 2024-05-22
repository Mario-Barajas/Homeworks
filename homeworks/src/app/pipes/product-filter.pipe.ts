import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../data/Product.interface';
import { Observable } from 'rxjs';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(list: Array<Product>, chunk: number = 5): Array<Array<Product>> {
    let pageList: Array<Array<Product>> = [];
    while (list.length >= chunk) {
      let tempList: Array<Product> = [];
      for (let i = 0; i < chunk; i++) tempList.push(list[i]);
      pageList.push(tempList);
      list = list.slice(chunk);
    }
    if (list.length < chunk && list.length > 0) pageList.push(list);
    return pageList;
  }
}
