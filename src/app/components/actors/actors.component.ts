import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  trending: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.getActors();
  }
  getActors() {
    this.movie.getActors().subscribe((res) => {
      console.log(res);
    });
  }
}
