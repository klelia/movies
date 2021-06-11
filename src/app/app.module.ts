import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponentComponent } from './movies-list-component/movies-list-component.component';
import { RentMovieComponentComponent } from './rent-movie-component/rent-movie-component.component';
import { MovieDetailComponent } from './movie-detail-component/movie-detail.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponentComponent,
    RentMovieComponentComponent,
    MovieDetailComponent,
    EditMovieComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
