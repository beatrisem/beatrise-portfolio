import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class LoadingScreenComponent implements OnInit {
  @Input() isVisible: boolean = true;

  ngOnInit(): void {
    console.log("Loading screen initialized!");

    // Trigger animations after 3 seconds
    setTimeout(() => {
      const loaderElement = document.querySelector('.loader');
      const loadingScreenElement = document.querySelector('.loading-screen');

      if (loaderElement) {
        loaderElement.classList.add('expanding'); // Start expanding animation
      }
      if (loadingScreenElement) {
        loadingScreenElement.classList.add('fade-background'); // Change background
      }
    }, 3000);

    // Hide loading screen
    setTimeout(() => {
      this.isVisible = false;
      console.log("Loading screen hidden.");
    }, 6000);
  }
}
