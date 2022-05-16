import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-getmovie',
  templateUrl: './getmovie.component.html',
  styleUrls: ['./getmovie.component.scss'],
})
export class GetmovieComponent implements OnInit {
  id: any;
  panelOpenState = false;
  movieDetails: any;
  sppiner: boolean = true;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  defultColorErr = {
    color: '#ff000042',
    'font-weight': '500',
    'letter-spacing': '2px',
  };
  constructor(
    private movie: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails() {
    this.movie.getMoviesDetails(this.id).subscribe(
      (res) => {
        // console.log(res);
        if (res) {
          this.sppiner = false;
        }
        this.movieDetails = res;
      },
      (err) => {
        // console.log('this is err', err.error.success);
        if (err) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'You can not Access to this infomation Right now',
            showConfirmButton: false,
            timer: 5000,
          });
          this.router.navigate(['']);
        }
      }
    );
  }
}
