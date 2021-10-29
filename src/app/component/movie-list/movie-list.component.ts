import { Component, OnInit } from '@angular/core';
import {MovieListService} from "../../services/movie-list.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  films:any;
  totalLength:any
  page:number = 1

  constructor(private movieService: MovieListService) { }

  ngOnInit(): void {
    this.fetchMovies()
  }

  fetchMovies():void {
    this.movieService.getMovies(this.page).subscribe(value => {
      this.films = value.results;
      this.totalLength = value.total_pages;
    })
  }

  pageChange($event:number) {
    this.page = $event;
    this.fetchMovies();
  }
}
