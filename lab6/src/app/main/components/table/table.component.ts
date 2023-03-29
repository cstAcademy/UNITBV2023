import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  moviesList!: Movie[];

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
    });

    this.moviesService.moviesListSubject.subscribe((res) => {
      this.moviesList = [...res];
      console.log('in subscribe ');
    });
  }

  ngOnInit(): void {
    this.moviesList = this.moviesService.movies;
    console.log(this.moviesList);
  }

  deleteMovie(movie: Movie) {
    this.moviesService.deleteMovie(movie);
  }

  sortByYear() {
    this.moviesService.sortByYear();
  }

  addNewMovie() {
    this.moviesService.addNewMovie();
  }

  editMovie(movie: Movie) {
    // todo

    // *query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        movieTitle: movie.title,
      },
      queryParamsHandling: 'merge',
    });
  }
}
