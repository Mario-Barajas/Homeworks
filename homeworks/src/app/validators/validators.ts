import {
  AbstractControl,
  FormArray,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Price } from '../data/Product.interface';

export const TagValidators: ValidatorFn[] = [
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(/^[a-zA-Z0-9]+$/),
];

export const CostValidators: ValidatorFn[] = [
  Validators.required,
  Validators.minLength(1),
  Validators.pattern(/^\d+(\.\d+)?$/),
  Validators.min(1),
];

export const TextValidators: ValidatorFn[] = [
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(/^[a-zA-Z0-9 ,.]+$/),
];

export const DiscountValidators: ValidatorFn[] = [
  Validators.required,
  Validators.minLength(1),
  Validators.pattern(/^\d+(\.\d+)?$/),
  Validators.min(0),
  Validators.max(99),
];

export const UrlValidators: ValidatorFn[] = [
  Validators.required,
  Validators.minLength(3),
];

export function DuplicatedTagValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const values = control.value.map((price: Price): string => price.tag);
    const uniqueValues = new Set(values);
    return uniqueValues.size !== values.length
      ? { duplicatedTags: true }
      : null;
  };
}

export function DuplicatedPhotoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const uniqueValues = new Set(control.value);
    return uniqueValues.size !== control.value.length
      ? { duplicatedPhotos: true }
      : null;
  };
}

export function LengthMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let form = control.get('prices') as FormArray;
    const pricesLength = form.value.length;
    form = control.get('photos') as FormArray;
    const photosLength = form.value.length;
    return pricesLength !== photosLength ? { lengthMismatch: true } : null;
  };
}
