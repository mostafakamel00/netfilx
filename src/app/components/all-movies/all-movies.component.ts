import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  myArr: any[] = [];
  newArr: any[] = [];
  unique: any;
  search: string = '';
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  totalLength: any;
  page: number = 1;
  sppiner: boolean = true;

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
      if (res) {
        setTimeout(() => {
          this.sppiner = false;
        }, 500);
      }
      this.myArr.push(...res.results);
      this.getFilter();
    });
  }
  getPopular() {
    this.movie.getPopularMovie().subscribe((res) => {
      if (res) {
        setTimeout(() => {
          this.sppiner = false;
        }, 500);
      }
      this.myArr.push(...res.results);
      this.getFilter();
    });
  }
  getTop() {
    this.movie.getTopRated().subscribe((res) => {
      if (res) {
        setTimeout(() => {
          this.sppiner = false;
        }, 500);
      }
      this.myArr.push(...res.results);
      this.getFilter();
    });
  }
  getTrend() {
    this.movie.getTrendingMovie().subscribe((res) => {
      if (res) {
        setTimeout(() => {
          this.sppiner = false;
        }, 500);
      }
      this.myArr.push(...res.results);
      this.getFilter();
    });
  }
  getUp() {
    this.movie.getUpcoming().subscribe((res) => {
      if (res) {
        setTimeout(() => {
          this.sppiner = false;
        }, 500);
      }
      this.myArr.push(...res.results);
      this.getFilter();
    });
  }

  getFilter() {
    this.newArr = [];
    // console.log(this.myArr, 'this.myArr');

    this.unique = this.myArr.filter((element) => {
      const isDuplicate = this.newArr.includes(element.id);
      if (!isDuplicate) {
        this.newArr.push(element.id);
        this.totalLength = element.length;
        return true;
      } else {
        return '';
      }
    });
    // console.log(this.unique, 'unique');
  }
}
