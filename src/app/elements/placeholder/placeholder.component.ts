import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() isHeader: boolean = true;
  @Input() lines: number = 3;

  get linesToShow() {
    return Array(this.lines);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
