import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MatDialogRef } from '@angular/material/dialog';
import {
  CostValidators,
  DiscountValidators,
  DuplicatedPhotoValidator,
  DuplicatedTagValidator,
  LengthMatchValidator,
  TagValidators,
  TextValidators,
  UrlValidators,
} from '../../validators/validators';
import { FormPhoto, FormPrices, ProductForm } from '../../data/Form.type';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  public constructor(
    private readonly modalRef: MatDialogRef<ReactiveFormComponent>,
    private readonly productService: ProductService
  ) {}
  protected clearLabel: string = 'Clear';
  protected titleLabel: string = 'Add new product';
  protected productTitleLabel: string = 'Title';
  protected pricesLabel: string = 'Prices';
  protected tagLabel: string = 'Tag';
  protected costLabel: string = 'Cost';
  protected addPriceLabel: string = 'Add Price';
  protected photosLabel: string = 'Photos';
  protected addPhotoLabel: string = 'Add Photo';
  protected urlLabel: string = 'Url';
  protected removeLabel: string = 'Remove Item';
  protected descriptionLabel: string = 'Description';
  protected discountLabel: string = 'Discount';
  protected submitLabel: string = 'Create Product';
  protected requiredErrorLabel: string = 'This field is required.';
  protected patternErrorLabel: string = 'Invalid character on this field.';
  protected minMaxErrorLabel: string = 'Value is out of range';
  protected duplicatedTagLabel: string = 'Duplicated tag found';
  protected duplicatedPhotoLabel: string = 'Duplicated photo found';
  protected lengthErrorLabel: string = 'Prices and Photos count does not match';

  protected minLengthErrorLabel: (error: any) => string = (
    error: any
  ): string => {
    return `This field should be ${error.minlength.requiredLength} characters long.`;
  };

  protected productForm: ProductForm = new FormGroup(
    {
      id: new FormControl(this.productService.getId(), {
        nonNullable: true,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: TextValidators,
      }),
      prices: new FormArray(
        [
          new FormGroup({
            tag: new FormControl('', {
              nonNullable: true,
              validators: TagValidators,
              updateOn: 'change',
            }),
            cost: new FormControl(1, {
              nonNullable: true,
              validators: CostValidators,
              updateOn: 'change',
            }),
          }),
        ],
        {
          validators: [Validators.minLength(1), DuplicatedTagValidator()],
          updateOn: 'change',
        }
      ),
      photos: new FormArray(
        [
          new FormControl('', {
            nonNullable: true,
            validators: UrlValidators,
          }),
        ],
        {
          validators: [Validators.minLength(1), DuplicatedPhotoValidator()],
          updateOn: 'change',
        }
      ),
      description: new FormControl('', {
        nonNullable: true,
        validators: TextValidators,
      }),
      offerDiscount: new FormControl(0, {
        nonNullable: true,
        validators: DiscountValidators,
      }),
    },
    { validators: LengthMatchValidator() }
  );

  protected addPrice(): void {
    const newPrice: FormPrices = new FormGroup({
      tag: new FormControl('', {
        nonNullable: true,
        validators: TagValidators,
      }),
      cost: new FormControl(1, {
        nonNullable: true,
        validators: CostValidators,
      }),
    });
    this.productForm.controls.prices.push(newPrice);
  }

  protected removePrice(priceIndex: number): void {
    this.productForm.controls.prices.removeAt(priceIndex);
  }

  protected addPhoto(): void {
    const newPhoto: FormPhoto = new FormControl('', {
      nonNullable: true,
      validators: UrlValidators,
    });
    this.productForm.controls.photos.push(newPhoto);
  }

  protected removePhoto(photoIndex: number): void {
    if (this.productForm.controls.photos.length > 1)
      this.productForm.controls.photos.removeAt(photoIndex);
  }

  protected closeModal(): void {
    this.productForm.reset();
    this.modalRef.close();
  }
}
