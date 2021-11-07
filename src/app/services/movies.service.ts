import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import {IMovieInfo} from "../models";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() {
  }

  addMovie(movie:IMovieInfo) {
    let movies = [];
    if (localStorage.getItem('Movies')) {
      movies = JSON.parse(localStorage.getItem('Movies') || '{}');
      movies = [movie, ...movies]
    } else {
      movies = [movie];
    }
    localStorage.setItem('Movies', JSON.stringify(movies));

  }
}
