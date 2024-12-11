import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'filter-buttons',
  templateUrl: './filter-buttons.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent {
  // Input for button labels and active states
  @Input() buttons: { title: string, isActive: boolean }[] = [];

  // Output events for each button click
  @Output() buttonClicked = new EventEmitter<number>();

  // Emit the index of the clicked button
  onButtonClick(index: number) {
    this.buttonClicked.emit(index);
  }
}
