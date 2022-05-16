import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  trending: any;
  mylist: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.getTrending();
  }
  getTrending() {
    this.movie.getTrendingMovie().subscribe((res) => {
      this.trending = res.results;
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 8,
    navSpeed: 700,

    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 9,
      },
    },
    nav: true,
  };
  addToCard(i: any) {
    if (localStorage.getItem('token')) {
      this.mylist = JSON.parse(localStorage.getItem('token')!);
      this.mylist.push(this.trending[i]);
      localStorage.setItem('token', JSON.stringify(this.mylist));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Added to Your List Successfully',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.mylist.push(this.trending[i]);
      localStorage.setItem('token', JSON.stringify(this.mylist));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Added to Your List Successfully',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
}
