import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieInfo: any;
  baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  constructor(private dataTransfer:DataTransferService) { }

  ngOnInit(): void {
    this.movieInfo = this.dataTransfer.store.getValue();
  }

}
