import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies:any;
  poster: any;
  movieID: any;

  popularMovies: any;
  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(){
    this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=d49eaf1ed2c2fbde095c2615c53504fa&language=en-US&page=2").subscribe((movies: any) =>{
      this.trendingMovies = movies.results;
      this.movieID = movies.results.id;

     
      console.log( this.trendingMovies);
      
      console.log();
    })

  }
  getPopularMovies(){
    this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=d49eaf1ed2c2fbde095c2615c53504fa&language=en-US&page=2").subscribe((movies: any) =>{
      this.popularMovies = movies.results;
      this.movieID = movies.results.id;

     
      console.log( this.popularMovies);
      
      console.log();
    })

  }

  goToMovie(type: string, id: String){
      this.router.navigate(['movie', type,id]);
  }
 
}
