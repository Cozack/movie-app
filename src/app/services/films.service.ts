import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovieInfo} from "../models";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
url = '../../assets/data.json';

  constructor(private http:HttpClient) {
  }

  getFilms():Observable<IMovieInfo[] | any> {

    return this.http.get<IMovieInfo[]>(this.url)
  }
}
