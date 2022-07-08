import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/Visitor';
import { MovieService } from 'src/app/services/movie/movie.service';
import { VisitorService } from 'src/app/services/visitor/visitor.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  data = {
    name: '',
    age: 0
  }

  constructor(
    private movieService: MovieService,
    private visitorService: VisitorService) { }

  ngOnInit(): void {
    this.visitorService.publishedVisitor.subscribe((published: Visitor) => {
      this.data = published;
    })
  }

  publishMovie() {
    this.movieService.movieAnnouncement({ title: 'Star Wars', length: 210 })
  }
}
