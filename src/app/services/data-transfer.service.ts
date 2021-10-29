import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IMovieInfo} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  store:BehaviorSubject<IMovieInfo> = new BehaviorSubject<IMovieInfo>({} as any)
}
