import { Component, OnInit } from '@angular/core';
import { Homework6Service } from '../../services/homework6.service';

@Component({
  selector: 'app-homework6',
  templateUrl: './homework6.component.html',
  styleUrl: './homework6.component.scss',
})
export class Homework6Component implements OnInit {
  protected numbers: string[] = [];
  constructor(private homeworkService: Homework6Service) {}
  getNumbers(): void {
    this.numbers = this.homeworkService.NUMBERS;
  }
  ngOnInit(): void {
    this.getNumbers();
  }
}
