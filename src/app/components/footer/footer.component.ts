import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  dates: any;
  constructor() {}

  ngOnInit(): void {
    this.date();
  }
  date() {
    const date = new Date().getFullYear();
    this.dates = date;
  }
}
