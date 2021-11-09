import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MovieInfoComponent} from "./component/movie-info/movie-info.component";
import {MoviesListComponent} from "./component/movies-list/movies-list.component";
import {NewMovieFormComponent} from "./component/new-movie-form/new-movie-form.component";
import {WishListComponent} from "./component/wish-list/wish-list.component";

const routes: Routes = [
  { path:'', component:MoviesListComponent},
  { path:'movie/:id', component:MovieInfoComponent},
  { path:'add-new-movie', component:NewMovieFormComponent},
  {path:'wish-list', component:WishListComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
