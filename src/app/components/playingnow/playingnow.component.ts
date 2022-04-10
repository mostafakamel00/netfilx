import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-playingnow',
  templateUrl: './playingnow.component.html',
  styleUrls: ['./playingnow.component.scss'],
})
export class PlayingnowComponent implements OnInit {
  playingNow: any;
  mylist: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.getNowPlaying();
  }
  getNowPlaying() {
    this.movie.getNowPlaying().subscribe((res) => {
      this.playingNow = res.results;
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 8,
    navSpeed: 700,

    navText: ['', ''],
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
    nav: false,
  };
  addToCard(i: any) {
    if (localStorage.getItem('token')) {
      this.mylist = JSON.parse(localStorage.getItem('token')!);
      this.mylist.push(this.playingNow[i]);
      localStorage.setItem('token', JSON.stringify(this.mylist));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Added to Your List Successfully',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.mylist.push(this.playingNow[i]);
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
