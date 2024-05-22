import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

export interface Link {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public constructor(@Inject(DOCUMENT) private readonly document: Document) {}
  protected titleLabel: string = 'Final Exercise';
  protected links: Array<Link> = [
    { label: 'Route A', path: 'a' },
    { label: 'Route B', path: 'b' },
    { label: 'Products', path: 'products' },
  ];
  public ngOnInit(): void {
    this.document.title = this.titleLabel;
  }
}
