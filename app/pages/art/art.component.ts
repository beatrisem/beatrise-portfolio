import {Component} from '@angular/core';
import {HeaderComponent} from "../../common/header/header.component";
import {FooterComponent} from "../../common/footer/footer.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {muralData, paintingData, sketchbookData} from "../../data/art/art-data";
import {SectionTitleComponent} from "../../reusable/section-title/section-title.component";
import {GalleryOverlayComponent} from "../../reusable/gallery-overlay/gallery-overlay.component";
import {FilterButtonsComponent} from "../../reusable/filter-buttons/filter-buttons.component";

@Component({
  selector: 'art-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgClass,
    NgIf,
    NgForOf,
    SectionTitleComponent,
    GalleryOverlayComponent,
    FilterButtonsComponent
  ],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss'
})

export class ArtComponent {
  public paintingDataList = paintingData;
  public muralDataList = muralData;
  public sketchbookDataList = sketchbookData;

  public allArtFilter: boolean = true;
  public paintingFilter: boolean = true;
  public muralFilter: boolean = true;
  public sketchbookFilter: boolean = true;

  public isOverlayOpen = false;
  public filteredImages: string[] = [];
  public selectedIndex = 0;

  //Art Filter Titles
  filterButtons = [
    { title: 'Show All', isActive: true },
    { title: 'Paintings', isActive: false },
    { title: 'Sketchbook', isActive: false },
    { title: 'Murals', isActive: false }
  ];

  //Art Filter Button Functionality
  onFilterButtonClicked(index: number) {
    this.filterButtons.forEach((button, i) => button.isActive = i === index);

    if (index === 0) {
      this.showAllArtData();
    } else if (index === 1) {
      this.showPaintingList();
    } else if (index === 2) {
      this.showSketchbookList();
    } else if (index === 3) {
      this.showMuralList();
    }
  }

  showAllArtData(): void {
    this.allArtFilter = true;
    this.paintingFilter = true;
    this.muralFilter = true;
    this.sketchbookFilter = true;
  }

  showPaintingList(): void {
    this.allArtFilter = false;
    this.paintingFilter = true;
    this.muralFilter = false;
    this.sketchbookFilter = false;
  }

  showMuralList(): void {
    this.allArtFilter = false;
    this.paintingFilter = false;
    this.muralFilter = true;
    this.sketchbookFilter = false;
  }

  showSketchbookList(): void {
    this.allArtFilter = false;
    this.paintingFilter = false;
    this.muralFilter = false;
    this.sketchbookFilter = true;
  }

  showOverlay(images: string[], index: number): void {
    this.filteredImages = images;
    this.selectedIndex = index;
    this.isOverlayOpen = true;
  }

  closeOverlay(): void {
    this.isOverlayOpen = false;
  }

  getImagesForCurrentFilter(): string[] {
    if (this.allArtFilter) {
      return [
        ...this.paintingDataList.map(item => item.largeImage),
        ...this.muralDataList.map(item => item.cover),
        ...this.sketchbookDataList.map(item => item.largeImage),
      ];
    } else if (this.paintingFilter) {
      return this.paintingDataList.map(item => item.largeImage);
    } else if (this.muralFilter) {
      return this.muralDataList.map(item => item.cover);
    } else if (this.sketchbookFilter) {
      return this.sketchbookDataList.map(item => item.largeImage);
    }
    return [];
  }

  getCurrentFilteredData() {
    if (this.allArtFilter) {
      return [...this.paintingDataList, ...this.muralDataList, ...this.sketchbookDataList];
    } else if (this.paintingFilter) {
      return this.paintingDataList;
    } else if (this.muralFilter) {
      return this.muralDataList;
    } else if (this.sketchbookFilter) {
      return this.sketchbookDataList;
    }
    return [];
  }
}

