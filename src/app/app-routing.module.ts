import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MovieListComponent} from "./component/movie-list/movie-list.component";
import {MovieInfoComponent} from "./component/movie-info/movie-info.component";

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: ':id', component: MovieInfoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
