import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {IMovieInfo} from "../models";
import movies from "../_data/movies.json";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // moviesData:IMovieInfo[] = movies

  constructor(private httpClient:HttpClient) {
  }

  getMoviesByName(name:string): Observable<IMovieInfo[]> {
    return this.httpClient.get<IMovieInfo[]>('src/assets/ data.json').pipe(
      tap(x => console.log(x)),
      map(movies => movies.filter(movie => movie.name.includes(name)))

    )
  }

}
