import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import {ALLMOVIES} from "../moviesList";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
allMovies = ALLMOVIES
  constructor() {
  }

 public getMovies():any[] {
    return this.allMovies
 }
}
