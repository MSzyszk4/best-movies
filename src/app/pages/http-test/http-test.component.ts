import { Component } from '@angular/core';
import {HttpMoviesService} from "../../services/http-movies.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent {

  errorMessage: string = '';
  constructor(private httpMovie: HttpMoviesService) {
  }
  get() {
    this.httpMovie.getMovies().subscribe();
  }

  post() {
    const movie: Movie = {
      country: "Poland",
      director: "Robert Zemeckis",
      category: "Drama, Romance",
      plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      year: "1994",
      title: "Wiedźmin",
      imdbRating: "10.0"
    }

    this.httpMovie.postMovie(movie).subscribe();
  }

  put() {
    const movie: Movie = {
      id: '54',
      country: "Poland",
      director: "Robert De niro",
      category: "Dramat i Akcja",
      plot: "Akcja, potwory sexy i piwo",
      poster: '',
      year: "1994",
      title: "Wiedźmin 2",
      imdbRating: "10.0"
    }

    this.httpMovie.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> = {
      id: '54',
      plot: "Gdzie jest Ciri?",
    }

    this.httpMovie.patchMovie(movie).subscribe();
  }

  delete() {
    this.httpMovie.deleteMovie('54').subscribe();
  }

  error() {
    this.httpMovie.makeError().subscribe({error: (err: string) => (this.errorMessage = err)})
    setTimeout(() => {
      this.errorMessage = ''
    }, 5000)

  }

  params() {
    this.httpMovie.params().subscribe()
  }

}
