import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  cols: number[] = [];
  rows: number[] = [];

  constructor(private service: GameService) {
    for (let i = 0; i < this.service.cols; ++i) {
      this.cols.push(i);
    }

    for (let i = 0; i < this.service.rows; ++i) {
      this.rows.push(i);
    }
  }
}
