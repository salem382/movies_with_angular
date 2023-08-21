import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    constructor (private _MoviesService:MoviesService) {}

    moviesArray:any = [];
    tvArray:any = [];
    PersonArray:any = [];
    imgPrefx:string="https://image.tmdb.org/t/p/w500/";


    ngOnInit(): void {
      this.getMovieData();
      this.getTvData();
      this.getPersonData();
    }

    getMovieData():void {
      this._MoviesService.getData('movie').subscribe({
        next:(response) => {
          this.moviesArray = response.results.slice(0, 10);
          console.log (response.results);
        }
      })
    }
    getTvData():void {
      this._MoviesService.getData('tv').subscribe({
        next:(response) => {
          this.tvArray = response.results.slice(0, 10);
          console.log (response.results);
        }
      })
    }
    getPersonData():void {
      this._MoviesService.getData('person').subscribe({
        next:(response) => {
          this.PersonArray = response.results.slice(0, 10);
          console.log (response.results);
        }
      })
    }
    
}
