import {Component, Input, OnInit} from '@angular/core';
import {IMovieInfo} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
@Input()
movie: IMovieInfo

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
  this.router.navigate([this.movie.id], {state: this.movie})
  }
}
