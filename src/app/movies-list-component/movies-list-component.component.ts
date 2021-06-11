import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list-component',
  templateUrl: './movies-list-component.component.html',
  styleUrls: ['./movies-list-component.component.css']
})
export class MoviesListComponentComponent implements OnInit {

  @Input() movielist!: Movie[];
  @Output() showmovie = new EventEmitter<any>();
  @Output() editmovie = new EventEmitter<any>();

  //@Output() cambiawelcome = new EventEmitter<string>();
  filmDetailId: any = null;

 //@Input() data!: Array<Movie>;

  constructor() { }

  // changeParent(){
  //   this.cambiawelcome.emit('Sono cambiato!');
  // }
  viewdetail(id:number){
    this.filmDetailId = id;
    this.showmovie.emit(this.filmDetailId);
  }
  editdetail(id:number){
    this.filmDetailId = id;
    this.editmovie.emit(this.filmDetailId);
  }
  addItem(event:Event){
    console.log(event);
  }
  ngOnInit(): void {
  }

}
