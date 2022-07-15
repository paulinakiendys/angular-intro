import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDataService } from './IDataService';
import { IOmdbResponse } from '../models/IOmdbResponse';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {
  private theData = new Subject<Movie[]>();
  public theData$: Observable<Movie[]> = this.theData.asObservable();

  constructor(private httpClient: HttpClient) { }

  getData() {
    this.httpClient.get<IOmdbResponse>(environment.omdbUrl + 's=star')
    .subscribe((data) => {
      this.theData.next(data.Search)
    })
  }
}
