import {Mark} from "../enums/mark";

export class BoardSquare {
  readonly col: number;
  readonly row: number;
  mark: Mark;

  constructor(col: number, row: number) {
    this.col = col;
    this.row = row;
  }

  get isSelected(): boolean {
    return this.mark != null;
  }

  reset(): void {
    this.mark = null;
  }
}
