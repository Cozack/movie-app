import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IMovieInfo} from "../../models";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  aboutInfo: IMovieInfo;

  constructor(private router: Router) {
    this.aboutInfo = this.router.getCurrentNavigation()?.extras.state as IMovieInfo
  }

  ngOnInit(): void {
  }

}
