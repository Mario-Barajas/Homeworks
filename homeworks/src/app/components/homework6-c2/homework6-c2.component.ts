import { Component, OnInit } from '@angular/core';
import { Homework6rootService } from '../../services/homework6root.service';

@Component({
  selector: 'app-homework6-c2',
  templateUrl: './homework6-c2.component.html',
  styleUrl: './homework6-c2.component.scss',
})
export class Homework6C2Component implements OnInit {
  protected message = '';
  constructor(private rootService: Homework6rootService) {}
  getMessage(): void {
    this.message = this.rootService.persistentData;
  }
  ngOnInit(): void {
    this.getMessage();
  }
}
