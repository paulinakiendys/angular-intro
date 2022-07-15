import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IDataService } from './IDataService';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {
  private theData = new Subject<Movie[]>();
  public theData$: Observable<Movie[]> = this.theData.asObservable();

  testData: Movie[] = [new Movie("ABC", "1234", "tt1234567", "https://via.placeholder.com/150"), new Movie("DEF", "5678", "tt7654321", "https://via.placeholder.com/150")]

  constructor() { }

  getData() {
    this.theData.next(this.testData);
  }
}
