import {Component, OnInit} from '@angular/core';
import movies from '../../_file/movies.json'
import {IMovieInfo} from "../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  moviesData:IMovieInfo[] = movies;


  constructor() { }

  ngOnInit(): void {
  }

}
