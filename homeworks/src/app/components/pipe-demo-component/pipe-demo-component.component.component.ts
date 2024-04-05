import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo-component',
  templateUrl: './pipe-demo-component.component.html',
  styleUrl: './pipe-demo-component.component.scss',
})
export class PipeDemoComponent {
  protected price: number = 999.99;
  protected message: string = 'this is a custom capitalize pipe';
}
