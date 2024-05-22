import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../data/Product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  public constructor(
    private readonly productService: ProductService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  protected currentProduct!: Product;
  private getProduct(): void {
    this.activatedRoute.params.subscribe((params: Params): Product => {
      return (this.currentProduct =
        this.productService.getProductList()[Number(params['id']) - 1]);
    });
  }

  protected mapPrices(prices: any) {
    const pricesList: Array<string> = Object.keys(prices).map(
      (key) => `Size: ${key} ${prices[key]}`
    );
    return pricesList;
  }

  protected afterDiscountStyle(discountValue: number): any {
    if (discountValue > 0)
      return {
        color: 'gray',
        'font-size': '',
        'text-decoration': 'line-through',
      };
    else return { color: '', 'font-size': '20px', 'text-decoration': '' };
  }

  protected discountStyle(): any {
    return { 'font-weight': 'bold', 'font-size': '20px' };
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
