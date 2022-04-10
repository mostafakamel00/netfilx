import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  whitemode = true;
  darkmode = false;
  constructor() {}

  ngOnInit(): void {
    this.scrollY();
  }
  scrollY() {
    window.onscroll = function () {
      // console.log(scrollY);
      if (scrollY >= 50) {
        document.querySelector('.navbar-light')?.classList.add('navbg');
      } else {
        document.querySelector('.navbar-light')?.classList.remove('navbg');
      }
    };
  }
  darkMode() {
    window.document.body.style.backgroundColor = '#212529';
    this.darkmode = false;
    this.whitemode = true;
  }
  whiteMode() {
    window.document.body.style.backgroundColor = '#eee';
    this.darkmode = true;
    this.whitemode = false;
  }
}
