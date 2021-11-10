import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  storage = JSON.parse(<string>localStorage.getItem('Movies'))

  filteredString?: string;
  sortMenu: '';


  constructor() {
  }

  ngOnInit(): void {


  }

  budgeCount():any {
    let items = JSON.parse(<string>localStorage.getItem('wishList'));
    return items.length
  }
}
