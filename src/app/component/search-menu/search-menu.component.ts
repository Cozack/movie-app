import {Component, OnInit} from '@angular/core';
import {IMovieInfo} from "../../models";
import movies from "../../_data/movies.json";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
  moviesData:IMovieInfo[] = movies

  constructor(private searchService:SearchService) {

  }


  ngOnInit(): void {
this.searchService.getMoviesByName('Halloween Kills').subscribe(value => console.log(value))
  }


}
