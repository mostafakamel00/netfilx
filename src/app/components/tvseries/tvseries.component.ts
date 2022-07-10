import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.scss'],
})
export class TvseriesComponent implements OnInit {
  TVSeries: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.getTVSeries();
  }
  getTVSeries() {
    this.movie.getTVSeries().subscribe((res) => {
      this.TVSeries = res.results;
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
}
