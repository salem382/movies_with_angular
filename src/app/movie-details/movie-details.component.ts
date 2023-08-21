import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private _ActiveRouter:ActivatedRoute, private _MoviesService:MoviesService) {
  }

  id:string = '';
  movieData:any = {};

  ngOnInit(): void {
    this.getID();
    this.getMovieDetails(this.id);
  }
  getID():void {
    this.id =  this._ActiveRouter.snapshot.params['id'];
  }
  getMovieDetails(id:string):void {
    this._MoviesService.getMovieData(id).subscribe({
      next:(response)=>{
        this.movieData = response;
        console.log (this.movieData)
      }
    })
  }
}
