import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMoviePage} from "../models/moviePage";

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  private url = 'https://api.themoviedb.org/3/movie/popular?&language=en-US&page=';

  constructor(private hhtpClient: HttpClient) {
  }

  getMovies(page: number): Observable<IMoviePage> {
    return this.hhtpClient.get<IMoviePage>(this.url + page,
      {
        headers: new HttpHeaders(
          {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTNkODJkMjFkYjc0ZTMwMjE4MjMwMmY4Mzk1ZDZhYyIsInN1YiI6IjYwYzQ4OGUxYzM1MTRjMDA1Njc1MmMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AlmtOco5fqH8a-sLqsT5vNqglImwCo6f8toZvQMz_XA'
          }
        )
      }
    )
  }
}
