import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpTestComponent } from './pages/http-test/http-test.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { YearsComponent } from './pages/years/years.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MovieInYearComponent } from './pages/years/movie-in-year/movie-in-year.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import {HttpClientModule} from "@angular/common/http";
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HttpTestComponent,
    MoviesComponent,
    PageNotFoundComponent,
    YearsComponent,
    MoviesInCategoryComponent,
    MovieDetailsComponent,
    MovieInYearComponent,
    MovieCoverComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
