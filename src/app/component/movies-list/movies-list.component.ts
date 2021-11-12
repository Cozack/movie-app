import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  storage = JSON.parse(<string>localStorage.getItem('Movies'))

  filteredString: string = '';
  sortMenu = '';
  gridListSwitch:boolean = true;
  date = new Date();



  constructor() {
  }

  ngOnInit(): void {
    this.gridListSwitch = JSON.parse(localStorage.getItem('grid-list') || '{}')

  }

  gridListDisable() {
    this.gridListSwitch = !this.gridListSwitch
    localStorage.setItem('grid-list', JSON.stringify(this.gridListSwitch))

  }

  budgeCount(): any {
    let items = JSON.parse(<string>localStorage.getItem('wishList'));
    return items.length
  }
}
