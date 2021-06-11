import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  @Input() lastId:any;
  @Output() moviecreated = new EventEmitter<any>();
  newmovie:any;


  constructor() { }

  create(){
    this.newmovie.image = '/assets/images/'+ this.newmovie.image;
    console.log(this.newmovie);
    this.moviecreated.emit(this.newmovie);

  }
  ngOnInit(): void {
    this.newmovie = {
      'id': this.lastId +1,
      'title': '',
      'image': '',
      'categories': ['fantasy'],
      'plot':'',
      'cast':''
    }
  }

}
