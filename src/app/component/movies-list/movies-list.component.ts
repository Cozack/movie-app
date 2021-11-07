import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ALLMOVIES} from "../../moviesList";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesData  = ALLMOVIES;
  filteredString?: string;
  sortMenu : '';


  constructor() { }

  ngOnInit():void {

  }
}
