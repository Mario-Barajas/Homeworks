import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../data/Product.interface';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  @Input() public page!: number;
  @Input() public products!: Array<Array<Product>>;
  @Output() public selectedPage: EventEmitter<number> = new EventEmitter();

  protected setPage(selectedPage: number = 0) {
    this.selectedPage.emit(selectedPage);
    this.page = selectedPage;
  }

  protected changePageHandler(direction: string): void {
    if (direction === 'fwd' && this.page < this.products.length - 1) {
      this.page += 1;
      this.selectedPage.emit(this.page);
    } else if (direction === 'back' && this.page > 0) {
      this.page -= 1;
      this.selectedPage.emit(this.page);
    }
  }
}
