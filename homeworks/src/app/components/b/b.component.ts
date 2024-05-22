import { Component } from '@angular/core';
import { Link } from '../../app.component';

@Component({
  selector: 'b-component',
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss',
})
export class BComponent {
  protected links: Array<Link> = [
    {
      label: 'B1 Component',
      path: 'b1',
    },
    {
      label: 'B2 Component',
      path: 'b2',
    },
    {
      label: 'B3 Component',
      path: 'b3',
    },
  ];
}
