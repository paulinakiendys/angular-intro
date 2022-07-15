import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.theData$.subscribe((data: Movie[]) => {
      this.movies = data;
    });

    this.service.getData();
  }

}
