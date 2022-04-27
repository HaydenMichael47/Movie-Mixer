import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  type = '';
  id = '';
  url = '';
  movies: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type']
    this.id = this.route.snapshot.params['id']
    this.getMovie();
  }


  getMovie(){
    this.http.get("https://api.themoviedb.org/3/movie/" + this.id + "?api_key=d49eaf1ed2c2fbde095c2615c53504fa&language=en-US&page=1").subscribe((movies) =>{
      this.movies = movies;
    })
  }
}
