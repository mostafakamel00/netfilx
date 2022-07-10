import { MovieService } from './../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent implements OnInit {
  upcoming: any[] = [];
  mylist: any[] = [];

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.getUpcoming();
  }
  getUpcoming() {
    this.movie.getUpcoming().subscribe((res) => {
      this.upcoming = res.results;
    });
  }

  customOptionsTwo: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 8,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,

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
        items: 5,
      },
    },
    nav: true,
  };
  addToCart(i: any) {
    if (localStorage.getItem('token')) {
      this.mylist = JSON.parse(localStorage.getItem('token')!);
      this.mylist.push(this.upcoming[i]);
      localStorage.setItem('token', JSON.stringify(this.mylist));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Added to Your List Successfully',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.mylist.push(this.upcoming[i]);
      localStorage.setItem('token', JSON.stringify(this.mylist));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Added to Your List Successfully',
        showConfirmButton: false,
        timer: 2000,
      });
    }
    // console.log('mylist', this.mylist.length);
  }
}
