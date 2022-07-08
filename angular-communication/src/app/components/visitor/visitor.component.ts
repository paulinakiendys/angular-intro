import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { VisitorService } from 'src/app/services/visitor/visitor.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {
  data = {
    title: '',
    length: 0
  }

  constructor(
    private movieService: MovieService, 
    private visitorService: VisitorService) { }

  ngOnInit(): void {
    this.movieService.publishedMovie.subscribe((published: Movie) => {
      this.data = published;
    })
  }

  publishVisitor() {
    this.visitorService.visitorAnnouncement({name: "Maja", age: 16})
  }
}
