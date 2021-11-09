import { Component, OnInit } from '@angular/core';
import {WishListService} from "../../services/wish-list.service";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  movieFromWishList = JSON.parse(<string>localStorage.getItem('wishList'))

  constructor(private wishListService:WishListService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('wishList')) {
      console.log('no movies');

    } else {
      this.movieFromWishList = JSON.parse(localStorage.getItem('wishList') || '{}');
    }
  }

  removeFromWishList (id:any) {
    this.wishListService.removeFromWishList(id)
  };
   refreshPage(){
    window.location.reload();
  }
}
