import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  game = {
    title: 'Dwarf Fortress',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868',
    description:
      "The deepest, most intricate simulation of a world that's ever been created.",
  };

  review: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToGamePage() {
    this.router.navigateByUrl('/game-page');
  }

  clearReview() {
    this.review = '';
  }
}
