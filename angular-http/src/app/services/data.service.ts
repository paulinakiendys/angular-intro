import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOmdbResponse } from '../models/IOmdbResponse';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private theData = new Subject<Movie[]>();
  theData$ = this.theData.asObservable();

  constructor(private httpClient: HttpClient) { }

  getData() {
    this.httpClient.get<IOmdbResponse>(environment.omdbUrl + 's=star')
    .subscribe((data) => {
      this.theData.next(data.Search)
    })
  }
}
