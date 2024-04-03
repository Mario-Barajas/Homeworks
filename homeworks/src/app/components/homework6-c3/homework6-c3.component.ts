import { Component, OnInit } from '@angular/core';
import { Homework6rootService } from '../../services/homework6root.service';

@Component({
  selector: 'app-homework6-c3',
  templateUrl: './homework6-c3.component.html',
  styleUrl: './homework6-c3.component.scss',
})
export class Homework6C3Component implements OnInit {
  protected message: string = '';
  constructor(private rootService: Homework6rootService) {}
  getMessage(): void {
    this.message = this.rootService.persistentData;
  }
  ngOnInit(): void {
    this.getMessage();
  }
}
