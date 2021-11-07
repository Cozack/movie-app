import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ALLMOVIES} from "../../moviesList";
import {MoviesService} from "../../services/movies.service";
import {IMovieInfo} from "../../models";
import value from "*.json";
import {Observable, Subscriber} from "rxjs";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-new-movie-form',
  templateUrl: './new-movie-form.component.html',
  styleUrls: ['./new-movie-form.component.css'],
})
export class NewMovieFormComponent implements OnInit {
  movies = ALLMOVIES;
  movieForm: FormGroup;
  movie: IMovieInfo;
  movieSubmitted:boolean;
  myImage:any;

  constructor(private fb:FormBuilder, private movieService:MoviesService) {}

  ngOnInit(): void {
// this.movieForm = new FormGroup({
//   name:new FormControl(null, Validators.required),
//   year:new FormControl(null, Validators.required),
//   cash_fees:new FormControl(null, Validators.required)
// })
    this.createMovieForm()
  }

  createMovieForm() {
    this.movieForm = this.fb.group({
      name:[null, Validators.required],
      year:[null, Validators.required],
      cash_fees:[null, Validators.required],
      poster_url:[null, Validators.required]
    })
  }
  get movieName() {
    return this.movieForm.get('name') as FormControl;
  }
  get movieYear() {
    return this.movieForm.get('year') as FormControl;
  }
  get movieCashFees() {
    return this.movieForm.get('cash_fees') as FormControl;
  }
  get movieImg() {
    return this.movieForm.get('poster_url') as FormControl;
  }

  onSumbmit() {
    console.log(this.movieForm.value)
    this.movieSubmitted = true;

    if (this.movieForm.valid) {
    // this.movie = Object.assign(this.movie, this.movieForm.value)
    this.movieService.addMovie(this.movieData());
    this.movies.push(this.movie)
    this.movieForm.reset()
      this.movieSubmitted = false;
    }
  }

movieData():IMovieInfo {
    return this.movie = {
      name:this.movieName.value,
      year:this.movieYear.value,
      cash_fees:this.movieCashFees.value,
      poster_url:this.myImage
    }
}


//////////////////////////////// GET NORMAL PATH OF IMAGES
  onChange($event:Event) {
const file = ($event.target as HTMLInputElement).files?.[0];
console.log(file);
// @ts-ignore
    this.convertToBase64(file);
  }

  convertToBase64(file:File) {
    const observ = new Observable((subscriber:Subscriber<any>)=> {
this.readFile(file, subscriber)
    });
    observ.subscribe((d) => {
      console.log(d)
      this.myImage = d
    })
  }

  readFile(file:File, subscriber:Subscriber<any>) {
const fileReader = new FileReader();
fileReader.readAsDataURL(file);

fileReader.onload = () => {
  subscriber.next(fileReader.result);
  subscriber.complete();
};

fileReader.onerror = (error) => {
  subscriber.error(error);
  subscriber.complete();
}
  }
}
