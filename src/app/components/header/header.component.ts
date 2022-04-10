import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerBGUrl!: string;
  title!: string;
  trending!: any;

  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.getUpcoming();
  }
  getUpcoming() {
    this.movie.getUpcoming().subscribe((res) => {
      this.trending = res;
      const item = Math.floor(Math.random() * this.trending.results.length);
      this.title = this.trending.results[item].original_title;
      this.headerBGUrl =
        'https://image.tmdb.org/t/p/original' +
        this.trending.results[item].backdrop_path;
    });
  }
}
