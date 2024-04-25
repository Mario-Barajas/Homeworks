import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-slug',
  templateUrl: './dynamic-slug.component.html',
  styleUrl: './dynamic-slug.component.scss',
})
export class DynamicSlugComponent {
  protected title: string = 'Child route with dynamic slug:';
}
