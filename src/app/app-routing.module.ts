import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MovieInfoComponent} from "./component/movie-info/movie-info.component";
import {MoviesListComponent} from "./component/movies-list/movies-list.component";

const routes: Routes = [
  { path:'', component:MoviesListComponent},
  { path:':id', component:MovieInfoComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
