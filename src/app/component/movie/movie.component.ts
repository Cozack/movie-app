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

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
  this.router.navigate(['movie' ,this.movie.id], {relativeTo:this.activatedRoute, state: this.movie})
  }
}
