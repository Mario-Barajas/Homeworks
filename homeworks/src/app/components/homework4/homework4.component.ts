import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrl: './homework4.component.scss',
})
export class Homework4Component {
  protected message: string = 'Hello world';
  protected inputValue: string = this.message;
  protected inputValue2: string = this.inputValue;
  public jsAlert = (): void => {
    alert('I was triggered by an event');
  };
  public inputHandler = (event: any): void => {
    this.message = event.target.value;
  };
}
