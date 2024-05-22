import { Component, Input } from '@angular/core';
import { Product } from '../../data/Product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() public page!: number;
  @Input() public products!: Array<Array<Product>>;
  public constructor(private readonly productService: ProductService) {}
}
