import {Component, Input} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent {

  @Input()
  movie: any;

  url = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  constructor(private dataTransfer: DataTransferService) {
  }

  saveStoreMovie() {
    this.dataTransfer.store.next(this.movie);
  }
}
