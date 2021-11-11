import {Component, Input, OnInit} from '@angular/core';
import {IMovieInfo} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {WishListService} from "../../services/wish-list.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovieInfo;
  isAddedToWishList: boolean = false


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private wishListService: WishListService) {
  }

  ngOnInit(): void {
    this.inActiveWishListButton(this.movie.id)
  }

  inActiveWishListButton(id: any): void {
    let items = JSON.parse(<string>localStorage.getItem('wishList'));
    this.isAddedToWishList = !items.some((e: any) => e.id === id);
    console.log(this.isAddedToWishList)
  }


  goToDetails(): void {
    this.router.navigate(['movie', this.movie.id], {relativeTo: this.activatedRoute, state: this.movie})
  }

  addToWishList(product: any) {
    this.wishListService.addToWishList(product);
  }

  deleteFromWishList(id: any) {
    this.wishListService.removeFromWishList(id)
  }

  refreshPage(){
    window.location.reload();
  }

}
