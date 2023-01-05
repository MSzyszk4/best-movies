import {Component, OnInit} from '@angular/core';
import {HttpMoviesService} from "../../services/http-movies.service";
import {Movie} from "../../models/movie";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]> | undefined;
  constructor(private http: HttpMoviesService) {}

  ngOnInit() {
    this.movies = this.http.getMovies();
  }
}
