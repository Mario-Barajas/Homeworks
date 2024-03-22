import { Component } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrl: './homework1.component.scss',
})
export class Homework1Component {
  protected active: boolean = false;
  protected className?: string;
  public toggleActive = (): void => {
    this.active = !this.active;
    this.className = this.active ? 'redText' : '';
  };
  protected fontStyle: any = { color: '#FF0000' };
}
