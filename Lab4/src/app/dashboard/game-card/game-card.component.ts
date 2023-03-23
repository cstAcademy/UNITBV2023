import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game;
  @Input() showVoteButton = true;
  @Output() gameEmitter: EventEmitter<Game> = new EventEmitter<Game>();

  review: string = '';

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {}

  navigateToGamePage() {
    this.gameService.saveGameToService(this.game);
    this.router.navigateByUrl('/game-page');
  }

  clearReview() {
    this.review = '';
  }

  emitGame() {
    this.gameEmitter.emit(this.game);
  }

  subjectGame() {
    this.gameService.voteBestGame(this.game);
  }
}
