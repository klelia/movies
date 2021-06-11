import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-movie-component',
  templateUrl: './rent-movie-component.component.html',
  styleUrls: ['./rent-movie-component.component.css']
})
export class RentMovieComponentComponent implements OnInit {

  title:string = 'Rent a Movie';

  quantity: number = 0;
  price: number = 8;
  discount: number = 20;

  total:number = 0;


  constructor() { }

  calculate(q:any){
    let subtotal = q * this.price;
    let totaldiscount = (subtotal * 20) / 100;
    this.total = subtotal - totaldiscount;
  }

  ngOnInit(): void {
  }

}
