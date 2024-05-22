import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Price, Product } from './Product.interface';

export type Photo = string;

export type FormPhoto = FormControl<Photo>;

export type FormPrices = FormGroup<{
  tag: FormControl<Price['tag']>;
  cost: FormControl<Price['cost']>;
}>;

export type ProductForm = FormGroup<{
  id: FormControl<Product['id']>;
  title: FormControl<Product['title']>;
  prices: FormArray<FormPrices>;
  photos: FormArray<FormPhoto>;
  description: FormControl<Product['description']>;
  offerDiscount: FormControl<Product['offerDiscount']>;
}>;
