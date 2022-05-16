import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
})
export class TvShowComponent implements OnInit {
  tvShow: any[] = [];
  sppiner: boolean = true;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movie: MovieService, private title: Title) {
    title.setTitle('TV-ShowPage');
  }

  ngOnInit(): void {
    this.getTv();
  }
  getTv() {
    this.movie.getTVSeries().subscribe((res) => {
      if (res) {
        this.sppiner = false;
      }
      this.tvShow = res.results;
      // console.log(res);
    });
  }
}
