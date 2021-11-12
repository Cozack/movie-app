import {Injectable} from '@angular/core';
import {map, take} from "rxjs/operators";
import {IMovieInfo} from "../models";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  constructor() {
    let existingCartItems = JSON.parse(<string>localStorage.getItem('wishList'));
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<IMovieInfo[]>([]);
  items: any = this.itemsSubject.asObservable();

  addToWishList(movie: IMovieInfo) {
    this.items.pipe(
      map((value: any) => {
        value.push(movie);
        localStorage.setItem('wishList', JSON.stringify(value));
      }),
    ).subscribe();
  }

  removeFromWishList(id: any) {
    const items = JSON.parse(<string>localStorage.getItem('wishList'));
    const filtered = items.filter((item: any) => item.id !== id);
    localStorage.setItem('wishList', JSON.stringify(filtered));
  }
}
