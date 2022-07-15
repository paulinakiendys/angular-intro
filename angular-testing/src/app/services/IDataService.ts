import { Observable } from "rxjs";
import { Movie } from "../models/Movie";

export interface IDataService {
    theData$: Observable<Movie[]>;

    getData(): void;
}