import {Component, OnInit} from '@angular/core';
import {IMovieInfo} from "../../models";
import movies from "../../_data/movies.json";
import {SearchService} from "../../services/search.service";
import {ALLMOVIES} from "../../moviesList";

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
  moviesData = ALLMOVIES
  movie:any

  constructor(private searchService:SearchService) {

  }


  ngOnInit(): void {

  }



}
