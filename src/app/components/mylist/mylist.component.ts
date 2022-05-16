import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss'],
})
export class MylistComponent implements OnInit {
  mylist: any[] = [];
  sppiner: boolean = true;

  imgPrefix: string = 'https://image.tmdb.org/t/p/original';

  constructor(private title: Title) {
    title.setTitle('Welcome To Your List');
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.mylist = JSON.parse(localStorage.getItem('token')!);
      this.sppiner = false;
    }
  }
  deleteItem(i: any) {
    this.mylist.splice(i, 1);
    localStorage.setItem('token', JSON.stringify(this.mylist));
  }
}
