import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import {AssetsService} from "../../services/assets.service";


@Component({
  selector: 'gallery-overlay',
  templateUrl: './gallery-overlay.component.html',
  standalone: true,
  styleUrls: ['./gallery-overlay.component.scss']
})
export class GalleryOverlayComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() selectedIndex: number = 0;
  @Output() closeOverlay = new EventEmitter<void>();

  constructor(
    public assetsService: AssetsService,
  ) {
  }

  ngOnInit() {
    window.addEventListener('keydown', this.handleKeyNavigation);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.handleKeyNavigation);
  }

  handleKeyNavigation = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'Escape') {
      this.close();
    }
  }

  nextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }

  prevImage() {
    this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
  }

  close() {
    this.closeOverlay.emit();
  }
}
