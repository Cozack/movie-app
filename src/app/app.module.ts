import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import { MovieComponent } from './component/movie/movie.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatirialModule} from "./component/matirial.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderByPipe } from './Pipes/order-by.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import {NewMovieFormComponent} from "./component/new-movie-form/new-movie-form.component";
import {MoviesService} from "./services/movies.service";
import localeUa from '@angular/common/locales/uk';
import {registerLocaleData} from "@angular/common";


registerLocaleData(localeUa, 'uk');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieInfoComponent,
    MovieComponent,
    FooterComponent,
    OrderByPipe,
    SearchPipe,
    NewMovieFormComponent

  ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        MatirialModule,
        FormsModule,
        ReactiveFormsModule,


    ],
  providers: [MoviesService, {provide:LOCALE_ID, useValue:'uk'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
