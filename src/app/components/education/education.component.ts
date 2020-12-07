import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shu-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  @Input() educationsDetails: any;
  constructor() {}

  ngOnInit(): void {}
}
