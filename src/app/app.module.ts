import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {RouterModule} from "@angular/router";
import { SearchMenuComponent } from './component/search-menu/search-menu.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieListComponent } from './component/movie-list/movie-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import { MovieListCardComponent } from './component/movie-list-card/movie-list-card.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchMenuComponent,
    MovieListComponent,
    MovieListCardComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
