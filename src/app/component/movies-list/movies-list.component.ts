import {Component, OnInit} from '@angular/core';
import movies from '../../_data/movies.json'
import {IMovieInfo} from "../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  pager = { currentPage: 1, totalPages: 0};
  options = { page: 1 };
  moviesData:IMovieInfo[] = movies;


  constructor() { }

  ngOnInit(): void {
  }

  changeSelection(options:any) {
    this.pager.currentPage = 1;
    options.page = 1;
  }

  changePage(pageno:any) {
    this.pager.currentPage = pageno;
    this.options.page = pageno;

  }
}
