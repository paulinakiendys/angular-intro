import { Movie } from "./Movie";

export interface IOmdbResponse {
    Search: Movie[],
    totalResults: string,
    Response: string
}