import {Component, OnInit} from '@angular/core';
import {ALLMOVIES} from "./moviesList";
import {IMovieInfo} from "./models";
import {MoviesService} from "./services/movies.service";
import {FilmsService} from "./services/films.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 allMovies = ALLMOVIES;

  title = 'movie-app';

  constructor(private movieService:MoviesService) {
  }

  ngOnInit() {
  this.isEmptyLocalStorage()
  }


  isEmptyLocalStorage () {
   this.movieService.isEmptyLocalStorage(this.allMovies)
  }

}

