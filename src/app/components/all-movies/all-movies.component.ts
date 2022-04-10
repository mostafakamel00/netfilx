import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  play: any;
  popular: any;
  top: any;
  trend: any;
  upcoming: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movie: MovieService, private title: Title) {
    title.setTitle('MoviesPage');
  }

  ngOnInit(): void {
    this.getPlaying();
    this.getPopular();
    this.getTop();
    this.getTrend();
    this.getUp();
  }
  getPlaying() {
    this.movie.getNowPlaying().subscribe((res) => {
      this.play = res.results;
    });
  }
  getPopular() {
    this.movie.getPopularMovie().subscribe((res) => {
      this.popular = res.results;
    });
  }
  getTop() {
    this.movie.getTopRated().subscribe((res) => {
      this.top = res.results;
    });
  }
  getTrend() {
    this.movie.getTrendingMovie().subscribe((res) => {
      this.trend = res.results;
    });
  }
  getUp() {
    this.movie.getUpcoming().subscribe((res) => {
      this.upcoming = res.results;
    });
  }
}
