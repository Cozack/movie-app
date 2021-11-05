import {Component, OnInit} from '@angular/core';
import {ALLMOVIES} from "../../moviesList";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesData  = ALLMOVIES;
  filteredString?: string;
  sortMenu: '';

  constructor() { }

  ngOnInit():void {

  }

  //
  // getUserName(name:string) {
  //    this.moviesData = (this.moviesData.filter(value => value.name.toLowerCase().includes(name)));
  //
  // }

 //  search(input: any) {
 //    this.getUserName(input.value.toLowerCase())
 //  }
 //
 // sortByName():any {
 //   this.moviesData = this.moviesData.sort((a:any, b:any) => {
 //     console.log(a-b)
 //     return a - b;
 //   }
 //   )
 // }


}
