import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Homework6rootService {
  persistentData: string = "I'm a variable inside a singleton";
  constructor() {}
}
