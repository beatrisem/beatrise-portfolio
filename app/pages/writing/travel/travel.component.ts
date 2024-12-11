import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {travelData} from "../../../data/writing/writing-data";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {TravelEntityData} from "../../../data/writing/travel-entity.data";
import {GalleryOverlayComponent} from "../../../reusable/gallery-overlay/gallery-overlay.component";

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
    NgForOf,
    NgClass,
    GalleryOverlayComponent
  ],
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  travelPiece?: TravelEntityData;
  isGridLayout: boolean = true;
  isOverlayOpen: boolean = false;
  selectedIndex: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const routeParam = params.get('title');
      this.travelPiece = travelData.find(article => article.route === routeParam);
    });
  }

  openOverlay(index: number) {
    this.selectedIndex = index;
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
  }
}
