import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _savedGame!: Game;
  gameSubject = new Subject<Game>();
  gameSubject$ = this.gameSubject.asObservable();

  constructor() {}

  voteBestGame(game: Game) {
    this.gameSubject.next(game);
  }

  saveGameToService(game: Game) {
    this._savedGame = game;
  }

  get savedGame() {
    return this._savedGame;
  }
}
