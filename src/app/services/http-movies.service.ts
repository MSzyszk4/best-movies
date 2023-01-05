import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from "@angular/common/http";
import {catchError, delay, Observable, tap, throwError} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  private url = 'http://localhost:3000/movies';
  constructor( private http: HttpClient ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

  // getMovies(): Observable<HttpResponse<Movie[]>> {
  //   return this.http.get<HttpResponse<Movie[]>>(this.url, {
  //     observe: "response"
  //   })
  //     .pipe(tap(console.log));
  // }


  postMovie(movie: Movie): Observable<Movie[]>  {
    return this.http.post<Movie>(this.url, movie)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      )
  }

  putMovie(movie: Movie): Observable<Movie[]>  {
    return this.http.put<Movie>(this.url + '/' + movie.id, movie)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      )
  }

  patchMovie(movie: Partial<Movie>): Observable<Movie[]>  {
    return this.http.patch<Movie>(this.url + '/' + movie.id, movie)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      )
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        tap(console.log),
        catchError(this.handleError),
      )
  }

  // Na potrzeby testu wywołania błędu http
  makeError(): Observable<HttpErrorResponse> {
    return this.http.delete(this.url + '/' + 999)
      .pipe(
        tap(console.log),
        catchError(this.handleError),
      )
  }


  private handleError(error: HttpErrorResponse) {
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );
    return throwError(() => {
      const error: any = new Error('Something bad happened, please try again later...');
      return error;
    })
  }


  params(): Observable<Movie> {
    const myParams = new HttpParams()
      .set('_sort', 'title')
      .set('_order', 'desc')

    return this.http.get<Movie[]>(this.url, {params: myParams})
      .pipe(
        tap(console.log)
      )
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/categories');
  }

  getYears():Observable<string[]>{
    return this.http.get<string[]>('http://localhost:3000/years')

  }

  getMovie(id: string | null): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + id)
  }

}
