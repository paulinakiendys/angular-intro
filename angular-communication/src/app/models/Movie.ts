export class Movie {
    title: string;
    length: number;

    constructor(newMovie: string, length: number) {
        this.title = newMovie;
        this.length = length;
    }
}