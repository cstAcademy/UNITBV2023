import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  arrayOfGames: Game[] = [
    {
      title: 'Dwarf Fortress',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868',
      description:
        "The deepest, most intricate simulation of a world that's ever been created.",
    },
    {
      title: 'Crusader Kings III',
      image:
        'https://cdn.akamai.steamstatic.com/steam/apps/1158310/header.jpg?t=1678993244',
      description:
        "Love, fight, scheme, and claim greatness. Determine your noble house’s legacy in the sprawling grand strategy of Crusader Kings III. Death is only the beginning as you guide your dynasty’s bloodline in the rich and larger-than-life simulation of the Middle Ages.",
    },
    {
      title: 'HITMAN 3',
      image:
        'https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg?t=1679476219',
      description:
        "Enter the world of the ultimate assassin. HITMAN World of Assassination brings together the best of HITMAN, HITMAN 2 and HITMAN 3 including the main campaign, contract mode, escalations, elusive target arcades and the roguelike inspired game mode HITMAN: Freelancer.",
    },
    {
      title: 'Deep Rock Galactic',
      image:
        'https://cdn.akamai.steamstatic.com/steam/apps/548430/header.jpg?t=1678288589',
      description:
        "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
    },
    {
      title: 'Stellaris',
      image:
        'https://cdn.akamai.steamstatic.com/steam/apps/281990/header.jpg?t=1678972819',
      description:
        "Explore a galaxy full of wonders in this sci-fi grand strategy game from Paradox Development Studios. Interact with diverse alien races, discover strange new worlds with unexpected events and expand the reach of your empire. Each new adventure holds almost limitless possibilities.",
    }
  ];

  bestGameAward!: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.setSubjectBestGame()
  }

  setBestGame(event: any) {
    this.bestGameAward = event;
  }

  setSubjectBestGame() {
    this.gameService.gameSubject.subscribe((game: Game) => {
      this.bestGameAward = game;
    })
  }
}
