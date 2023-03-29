import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import moviesData from './movies.json'; //! https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#new---resolvejsonmodule

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesList: Movie[] = moviesData;
  moviesListSubject = new Subject<Movie[]>();

  constructor() {}

  get movies(): Movie[] {
    return this.moviesList;
  }

  set movies(moviesToSet: any) {
    this.moviesList = moviesToSet;
    this.moviesListSubject.next(moviesToSet);
  }

  deleteMovie(movie: Movie) {
    const index = this.moviesList.findIndex(() => movie);
    this.moviesList.splice(index, 1);

    this.moviesListSubject.next(this.moviesList);
  }

  addNewMovie() {
    this.moviesList.push(this.emptyMovie());
    this.moviesListSubject.next(this.moviesList);
  }

  sortByYear() {
    this.moviesList.sort((a, b) => {
      return a.year > b.year ? 1 : -1;
    });
    this.moviesListSubject.next(this.moviesList);
  }

  emptyMovie(): Movie {
    return {
      title: '-',
      year: 1,
      runtime: '-',
      actors: '-',
      plot: '-',
      genre: '-',
      awards: '-',
      poster: '-',
      imdbRating: '-',
      images: [],
    };
  }
}
