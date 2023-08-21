import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getData(type:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=db1fc41949e531723662d766a8409954`);
  }
  getMovieData(id:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=db1fc41949e531723662d766a8409954&language=en-US`)
  }
  getPage(page:number):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=db1fc41949e531723662d766a8409954&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  }


}
