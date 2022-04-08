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
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=d49eaf1ed2c2fbde095c2615c53504fa&language=en-US&page=1").subscribe((movies: any) =>{
      this.trendingMovies = movies.results;
       

     
      console.log( this.trendingMovies);
      
      console.log();
    })

  }

 
}
