import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie";
import {Observable, switchMap, tap} from "rxjs";
import {HttpMoviesService} from "../../../services/http-movies.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie> | undefined;

  constructor(
    private http: HttpMoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    ) {
  }

  ngOnInit() {
    this.movieDetails = this.route.paramMap
      .pipe(
        switchMap(
          (params: ParamMap) => this.http.getMovie(params.get('id'))
        ),
        tap(console.log)
      )
  }

  goToMovies() {
    this.location.back();
  }
}
