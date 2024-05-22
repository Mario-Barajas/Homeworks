import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Price, Product } from '../../data/Product.interface';
import { ProductService } from '../../services/product.service';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { combineLatest, map, Observable, startWith, Subject } from 'rxjs';

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public constructor(
    private readonly productService: ProductService,
    private readonly modal: MatDialog
  ) {}

  protected filterValue: string = '';
  private readonly filter$$: Subject<string> = new Subject<string>();
  private readonly filter$: Observable<string> = this.filter$$.asObservable();

  protected offersValue: boolean = false;
  private readonly offers$$: Subject<boolean> = new Subject<boolean>();
  private readonly offers$: Observable<boolean> = this.offers$$.asObservable();

  private newProduct!: Product;
  protected page: number = 0;
  protected productList: Array<Product> = this.productService.getProductList();
  protected productList$: Observable<Array<Product>> =
    this.productService.products$;
  protected offersList: Array<Product> = this.productService.getOffersList();
  protected currentList: Array<Product> = this.offersValue
    ? this.offersList
    : this.productList;

  protected openModal(): void {
    const modalRef = this.modal.open(ReactiveFormComponent);
    console.log('button clicked');
    modalRef.afterClosed().subscribe((result) => {
      this.newProduct = result;
      this.productService.addProduct(this.newProduct);
      this.productList = this.productService.getProductList();
      this.offersList = this.productService.getOffersList();
    });
  }

  protected selectedPageHandler(selectedPage: number): void {
    this.page = selectedPage;
  }

  protected searchWord(): void {
    this.productService.products$;
  }

  protected filteredProducts$: Observable<Array<Product>> = combineLatest(
    this.productList$,
    this.filter$.pipe(startWith('')),
    this.offers$.pipe(startWith(false))
  ).pipe(
    map(
      ([products, filter, offer]: [
        Array<Product>,
        string,
        boolean
      ]): Array<Product> => {
        if (offer)
          return products.filter(
            (product: Product): boolean =>
              product.title.includes(filter) && product.offerDiscount > 0
          );
        else
          return products.filter((product: Product): boolean =>
            product.title.includes(filter)
          );
      }
    )
  );

  protected filterChangeHandler(event: string): void {
    this.filter$$.next(event);
  }

  protected offersChangeHandler(event: boolean): void {
    this.offers$$.next(event);
  }
}
