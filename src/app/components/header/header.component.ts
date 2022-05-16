import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerBGUrl!: any;
  title!: string;
  id!: number;
  trending!: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movie: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getUpcoming();
  }
  getUpcoming() {
    this.movie.getUpcoming().subscribe((res) => {
      this.trending = res;
      const item = Math.floor(Math.random() * this.trending.results.length);
      this.title = this.trending.results[item].original_title;
      this.id = this.trending.results[item].id;
      this.headerBGUrl =
        this.imgPrefix + this.trending.results[item].backdrop_path;
    });
  }
}
