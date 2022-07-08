import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieSource = new Subject<Movie>();

  publishedMovie = this.movieSource.asObservable();

  constructor() { }

  movieAnnouncement(movie: Movie) {
    this.movieSource.next(movie);
    console.log("Announcement from movie service")
  }
}
