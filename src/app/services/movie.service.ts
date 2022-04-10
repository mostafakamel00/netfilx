import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  /*
/movie/latest
/movie/popular
/movie/top_rated
/movie/upcoming
/trending/all/week
/discover/tv

*/
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  getTrendingMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trending/all/week${this.apiKey}`);
  }
  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/now_playing${this.apiKey}`);
  }
  getPopularMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular${this.apiKey}`);
  }
  getTopRated(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/top_rated${this.apiKey}`);
  }
  getUpcoming(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/upcoming${this.apiKey}`);
  }
  getTVSeries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/tv${this.apiKey}`);
  }
  getActors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trending/person/week${this.apiKey}`);
  }
  getMoviesDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}${this.apiKey}`);
  }
}
