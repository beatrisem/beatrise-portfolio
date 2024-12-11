import {Component} from '@angular/core';
import {HeaderComponent} from "../../common/header/header.component";
import {FooterComponent} from "../../common/footer/footer.component";
import {opinionPiecesData, travelData} from "../../data/writing/writing-data";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {SectionTitleComponent} from "../../reusable/section-title/section-title.component";
import {FilterButtonsComponent} from "../../reusable/filter-buttons/filter-buttons.component";

@Component({
  selector: 'writing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgClass,
    RouterLink,
    SectionTitleComponent,
    FilterButtonsComponent,
  ],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})

export class WritingComponent {

  public travelDataList = travelData;
  public opinionPiecesDataList = opinionPiecesData;

  public allWritingFilter: boolean = true;
  public travelFilter: boolean = true;
  public opinionFilter: boolean = true;

 //Writing Filter Titles
  filterButtons = [
    { title: 'Show All', isActive: true },
    { title: 'Travel', isActive: false },
    { title: 'Opinion Pieces', isActive: false }
  ];

  //Art Filter Button Functionality
  onFilterButtonClicked(index: number) {
    this.filterButtons.forEach((button, i) => button.isActive = i === index);

    if (index === 0) {
      this.showAllWritingData();
    } else if (index === 1) {
      this.showTravelList();
    } else if (index === 2) {
      this.showOpinionPiecesList();
    }
  }

  public showAllWritingData(): void {
    this.allWritingFilter = true;
    this.travelFilter = true;
    this.opinionFilter = true;
  }

  public showTravelList(): void {
    this.allWritingFilter = false;
    this.travelFilter = true;
    this.opinionFilter = false;
  }

  public showOpinionPiecesList(): void {
    this.allWritingFilter = false;
    this.travelFilter = false;
    this.opinionFilter = true;
  }
}
