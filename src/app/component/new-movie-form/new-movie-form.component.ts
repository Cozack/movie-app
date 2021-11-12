import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MoviesService} from "../../services/movies.service";
import {IMovieInfo} from "../../models";
import {Observable, Subscriber} from "rxjs";
import {ImageConvertService} from "../../services/image-convert.service";

@Component({
  selector: 'app-new-movie-form',
  templateUrl: './new-movie-form.component.html',
  styleUrls: ['./new-movie-form.component.scss'],
})

export class NewMovieFormComponent implements OnInit {
  movieForm: FormGroup;
  movie: IMovieInfo;
  movieSubmitted: boolean;
  myImage: any;
  generationId = Math.floor(Math.random() * 999) + 1
  today: any = new Date()/*.toLocaleDateString('uk-UA')*/
  //  setTime:any= new Intl.DateTimeFormat('uk-UA').format(new Date());
  // date:any = new Date().toLocaleString('uk-UA', {
  //   year:"numeric",
  //   month:"long",
  //   day:"numeric",
  //   weekday:"long",
  //   hour:"numeric",
  //   minute:"numeric",
  //   second:"numeric"
  // })

  constructor(private fb: FormBuilder, private movieService: MoviesService, private imageConvertService: ImageConvertService) {
  }


  ngOnInit(): void {
    this.createMovieForm()
  }

  createMovieForm() {
    this.movieForm = this.fb.group({
      name: [null, Validators.required],
      year: [null, Validators.required],
      cash_fees: [null, Validators.required],
      poster_url: [null, Validators.required],
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


  onSumbmit() {
    console.log(this.movieForm.value)
    this.movieSubmitted = true;

    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieData());
      this.movieForm.reset()
      this.movieSubmitted = false;
    }
  }

  movieData(): IMovieInfo {
    return this.movie = {
      name: this.movieName.value.charAt(0).toUpperCase() + this.movieName.value.slice(1),
      year: this.movieYear.value,
      cash_fees: this.numFormatter(this.movieCashFees.value),
      poster_url: this.myImage,
      id: this.generationId,
      date: this.today.toString()
    }
  }

  numFormatter(num: any) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }


//////////////////////////////// GET NORMAL PATH OF IMAGES

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files?.[0];
    console.log(file);
// @ts-ignore
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observ = new Observable((subscriber: Subscriber<any>) => {
      this.imageConvertService.readFile(file, subscriber)
    });
    observ.subscribe((d) => {
      console.log(d)
      this.myImage = d
    })
  }


}
