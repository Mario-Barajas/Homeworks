import { Injectable } from '@angular/core';
import { Product } from '../data/Product.interface';
import { catchError, Observable, retry, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}
  private productsUrl: string = '/api/products';

  public readonly products$: Observable<Array<Product>> = this.http.get<
    Array<Product>
  >(this.productsUrl);

  public getProductList(): Array<Product> {
    let productList: Array<Product> = JSON.parse(
      localStorage.getItem('productList') as string
    );
    // if (productList === null) {
    //   localStorage.setItem('productList', JSON.stringify(ProductList));
    // }
    // productList = JSON.parse(localStorage.getItem('productList') as string);
    return productList;
  }

  public getOffersList(): Array<Product> {
    const offerList: Array<Product> = [];
    this.getProductList().map((product) => {
      if (product.offerDiscount) offerList.push(product);
    });
    return offerList;
  }

  public createPages(
    list: Array<Product>,
    chunk: number = 5
  ): Observable<Array<Array<Product>>> {
    let pageList: Array<Array<Product>> = [];
    while (list.length >= chunk) {
      let tempList: Array<Product> = [];
      for (let i = 0; i < chunk; i++) tempList.push(list[i]);
      pageList.push(tempList);
      list = list.slice(chunk);
    }
    if (list.length < chunk && list.length > 0) pageList.push(list);
    return of(pageList);
  }

  public addProduct(product: Product): void {
    let productList: Array<Product> = JSON.parse(
      localStorage.getItem('productList') as string
    );
    productList.push(product);
    localStorage.setItem('productList', JSON.stringify(productList));
  }

  public getId(): string {
    const id: string = String(this.getProductList().length + 1);
    return id;
  }
}
