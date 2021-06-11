import { Component,OnInit } from '@angular/core';
import {Movie} from './movie';
import {MOVIES} from './mock-movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'epicmovies';
  selected: string = 'list';
  movies: Array<Movie> = MOVIES;
  selectedmovie!:any;
  lastId: any;


  constructor(){}

  // findMovie(id:any):any{
  //   let movie;
  //   for(let i = 0; i < this.movies.length; i++){
  //       if(this.movies[i].id === id){
  //         movie = this.movies[i];
  //       }
  //   }
  //   if(movie) {
  //     return movie;
  //   }
  // }
  createMovie(movie:any){
    this.movies.push(movie);
    this.selected = 'list';
  }
  updateMovie(movie:any){
    console.log(movie);
    let index = this.movies.findIndex((value)=>{
      return value.id === movie.id;
    });
    for(let prop in movie){
      this.movies[index][prop] = movie[prop];
    }

  }
  editDetail(movieId:any){
    console.log(movieId);
    this.selectedmovie = this.movies.find((value)=>{
      return value.id === movieId;
    });
    this.selected = 'edit';
    console.log(this.selectedmovie.title);
  }
  viewDetail(movieId:any){
    console.log(movieId);
    this.selectedmovie = this.movies.find((value)=>{
      return value.id === movieId;
    });
    this.selected = 'detail';
    console.log(this.selectedmovie.title);
  }

  showcontent(type:string):void {
    this.selected = type;
  }

  ngOnInit(){
    this.lastId = Math.max(...this.movies.map((val) => val.id));
  }
}
