import { Component } from '@angular/core';
import { Link } from '../../app.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss',
})
export class AComponent {
  protected links: Array<Link> = [
    {
      label: 'A1 Component',
      path: 'a1',
    },
    {
      label: 'A2 Component',
      path: 'a2',
    },
    {
      label: 'A3 Component',
      path: 'a3',
    },
  ];
}
