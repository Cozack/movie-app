import {Component, OnInit} from '@angular/core';
import {ALLMOVIES} from "../../moviesList";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesData = ALLMOVIES;

  constructor() { }

  ngOnInit(str?:string):void {

  }


  getUserName(name:any) {
     this.moviesData = (this.moviesData.filter(value => value.name.includes(name)));

  }

  search(input: any) {
    this.getUserName(input)
  }
}
