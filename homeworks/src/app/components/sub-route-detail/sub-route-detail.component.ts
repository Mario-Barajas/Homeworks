import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'subRoute-detail',
  templateUrl: './sub-route-detail.component.html',
  styleUrl: './sub-route-detail.component.scss',
})
export class SubRouteDetailComponent implements OnInit {
  public constructor(private readonly activatedRoute: ActivatedRoute) {}
  protected message: string = '';
  private getMessage(): void {
    this.activatedRoute.params.subscribe(
      (params: Params): void => (this.message = params['slug'])
    );
  }
  ngOnInit(): void {
    this.getMessage();
  }
}
