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
  gridListSwitch = true

  constructor() {
  }

  ngOnInit(): void {
  }

  budgeCount(): any {
    let items = JSON.parse(<string>localStorage.getItem('wishList'));
    return items.length
  }

  targetDisable() {
    if (!localStorage.getItem('grid-list')) {
      localStorage.setItem('grid-list', 'grid')
    }
    if (!this.gridListSwitch) {
      localStorage.setItem('grid-list', 'list')
    } else localStorage.setItem('grid-list', 'grid')

    this.gridListSwitch = !this.gridListSwitch
  }
}
