import { Component } from '@angular/core';

@Component({
  selector: 'app-homework7',
  templateUrl: './homework7.component.html',
  styleUrl: './homework7.component.scss',
})
export class Homework7Component {
  protected price: number = 999.99;
  protected message: string = 'this is a custom capitalize pipe';
}
