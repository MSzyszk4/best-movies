import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {NgForm, NgModel} from "@angular/forms";
import {HttpMoviesService} from "../../services/http-movies.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  model: Partial<Movie> = {};
  categories: string[] = [];
  years: string[] = [];

  constructor(private httpMovies: HttpMoviesService) {
  }

  ngOnInit() {
    this.httpMovies.getCategories().subscribe(cat => this.categories = cat)
    this.httpMovies.getYears().subscribe(years => this.years = years)
  }


  send() {
    console.log(this.model)
    this.httpMovies.postMovie(this.model as Movie).subscribe(
      result => console.log(result),
      error => console.error(error)
    )
  }

  printModel(title: NgModel) {
    console.log(title)
  }
}
