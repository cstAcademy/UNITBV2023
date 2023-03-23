import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  gameSavedInService!: Game; 
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameSavedInService = this.gameService.savedGame;
  }

}
