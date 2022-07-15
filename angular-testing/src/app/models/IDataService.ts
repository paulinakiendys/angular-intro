import { Subject } from "rxjs";
import { Movie } from "./Movie";

export interface IDataService {
    getData: () => void;
    theData: Subject<Movie[]>;
}