import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {RouterModule} from "@angular/router";
import { SearchMenuComponent } from './component/search-menu/search-menu.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import { MovieComponent } from './component/movie/movie.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchMenuComponent,
    MoviesListComponent,
    MovieInfoComponent,
    MovieComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
