import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shu-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss'],
})
export class WorkItemComponent implements OnInit {
  @Input() education: any;
  constructor() {}

  ngOnInit(): void {}
}
