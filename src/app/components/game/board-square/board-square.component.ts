import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'game-square',
  templateUrl: "./board-square.component.html",
  styleUrls: ['./board-square.component.scss'],
})
export class BoardSquareComponent {
  @Input() col: number;
  @Input() row: number;

  constructor(private service: GameService) { }

  select(): void {
    this.service.select(this.col, this.row);
  }

  get isSelected(): boolean {
    return this.service.isSelected(this.col, this.row);
  }

  get markClass(): string {
    return this.service.getMarkName(this.col, this.row);
  }

  get selectedClass(): string {
    return this.isSelected ? "selected" : "";
  }
}
