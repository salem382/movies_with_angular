import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-component',
  templateUrl: './movies-component.component.html',
  styleUrls: ['./movies-component.component.css']
})
export class MoviesComponentComponent implements OnInit {
  
  term:string = '';
  movieData:any = [];
  imgPrefx:string="https://image.tmdb.org/t/p/w500/";
  paginationArray = new Array(10).fill(0).map((x, i) => i + 1);
  isLoading:boolean = false;

  constructor(private _MovieServes:MoviesService) {}

  ngOnInit(): void {
    this.changePage(1);
  }

  changePage(page:number):void {
    this.isLoading = true;
    this._MovieServes.getPage(page).subscribe({
      next:(resp) => {
        this.movieData = resp.results;
      },
      complete:()=> {
        this.isLoading = false;
      }
    })
  }
}
