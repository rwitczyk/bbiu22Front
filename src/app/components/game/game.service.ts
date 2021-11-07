import {Injectable} from '@angular/core';
import {Player} from "./enums/player";
import {Mark} from "./enums/mark";
import {BoardSquare} from "./board-square/board-square";
import {List} from "immutable";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private totalSelectedSquares = 0;
  private activePlayer = Player.One;
  private squares: List<BoardSquare>;
  private winner = "";

  readonly cols = 3;
  readonly rows = 3;
  readonly winConditions = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];


  constructor() {
    this.reset();
  }


  get amountOfSquares(): number {
    return this.cols * this.rows;
  }

  get hasWinner(): boolean {
    return (this.winner || "").trim() !== "";
  }

  get winText(): string {
    if (!this.hasWinner) {
      return "";
    }

    return this.winner === "tie"
      ? "Cat's Game!"
      : `The winner is player ${this.winner.toLowerCase()}!`;
  }


  getActivePlayer(): string {
    return Player[this.activePlayer].toLowerCase();
  }

  getMarkName(col: number, row: number): string {
    const square = this.getSquare(col, row);
    return Mark[square.mark] || "";
  }

  index(col: number, row: number): number {
    return col + (this.rows * row);
  }

  isSelected(col: number, row: number): boolean {
    const square = this.getSquare(col, row);
    return square.isSelected;
  }

  select(col: number, row: number): void {
    const square = this.getSquare(col, row);
    if (square.isSelected || this.hasWinner) {
      return;
    }

    this.incrementTotalSelectedSquares();
    square.mark = this.getCurrentMark();
    this.checkForEndGame();
    this.togglePlayer();
  }

  reset(): void {
    this.winner = "";
    this.totalSelectedSquares = 0;
    this.activePlayer = Player.One;
    this.setupBoard();
  }


  private checkForEndGame(): void {
    this.checkForWinner();
    this.checkForTie();
  }

  private checkForWinner(): void {
    for (let i = 0; i < this.winConditions.length; ++i) {
      const indexes = this.winConditions[i];
      const markOne = this.squares.get(indexes[0]).mark;
      const markTwo = this.squares.get(indexes[1]).mark;
      const markThree = this.squares.get(indexes[2]).mark;
      const hasWinner = markOne != null && markOne === markTwo && markOne === markThree;
      if (hasWinner) {
        const player = markOne === Mark.cross ? Player.One : Player.Two;
        this.winner = Player[player].toLowerCase();
        break;
      }
    }
  }

  private checkForTie(): void {
    if (this.totalSelectedSquares === this.amountOfSquares) {
      this.winner = "tie";
    }
  }

  private getCurrentMark(): Mark {
    return this.activePlayer === Player.Two
      ? Mark.nought
      : Mark.cross;
  }

  private getSquare(col: number, row: number): BoardSquare {
    const index = this.index(col, row);
    return this.squares.get(index);
  }

  private incrementTotalSelectedSquares(): void {
    this.totalSelectedSquares++;
  }

  private setupBoard(): void {
    const squares = [];
    for (let row = 0; row < this.rows; ++row) {
      for (let col = 0; col < this.cols; ++col) {
        squares.push(new BoardSquare(col, row));
      }
    }

    this.squares = List(squares);
  }

  private togglePlayer(): void {
    this.activePlayer = this.activePlayer === Player.One
      ? Player.Two
      : Player.One;
  }
}
