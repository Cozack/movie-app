import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  store = new BehaviorSubject<any>([] )

  constructor() {
  }

  getState() {
    return this.store.getValue()
  }

  setState(state:any) {
    this.store.next(state)
  }
}
