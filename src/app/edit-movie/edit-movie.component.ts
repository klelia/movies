import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  @Input() movie:any;
  @Output() movieupdated = new EventEmitter<any>();
  mymovie:any;

  constructor() { }

  resetMovie(){
    this.mymovie = Object.assign({},this.movie);
  }
  update(){
    console.log(this.mymovie);
    this.movieupdated.emit(this.mymovie);

  }
  ngOnInit(): void {
    this.resetMovie();
  }

}
