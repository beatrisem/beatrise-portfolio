import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { LoadingScreenComponent } from './pages/loading-screen/loading-screen.component';
import { HeaderComponent } from './common/header/header.component';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    LoadingScreenComponent,
    HeaderComponent,
    RouterOutlet,
    NgIf,
  ],
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // Determine if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      this.isLoading = true; // Show the loading screen
      localStorage.setItem('hasVisited', 'true');

      // hide the loading screen after 6 seconds
      setTimeout(() => {
        this.isLoading = false;
      }, 6000);
    }
  }
}
