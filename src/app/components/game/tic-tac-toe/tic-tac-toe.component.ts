import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  constructor(
    private service: GameService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  get currentTurnText(): string {
    const player = this.service.getActivePlayer();
    return `Player ${player}'s turn.`;
  }

  get winnerText(): string {
    return this.service.winText;
  }

  reset(): void {
    this.service.reset();
    this.changeDetector.markForCheck();
    window.location.reload();
  }
}
