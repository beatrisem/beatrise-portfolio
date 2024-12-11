import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpinionPiecesEntityData } from "../../../data/writing/opinion-pieces-entity.data";
import { opinionPiecesData } from "../../../data/writing/writing-data";
import { DatePipe, NgIf } from "@angular/common";

@Component({
  selector: 'app-opinion-piece',
  templateUrl: './opinion-piece.component.html',
  standalone: true,
  imports: [
    DatePipe,
    NgIf
  ],
  styleUrls: ['./opinion-piece.component.scss']
})
export class OpinionPieceComponent implements OnInit {

  opinionPiece?: OpinionPiecesEntityData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const routeParam = params.get('title');
      this.opinionPiece = opinionPiecesData.find(article => article.route === routeParam);
    });
  }
}
