import { Component, OnInit } from '@angular/core';
import { NgClass } from "@angular/common";
import {Router, NavigationEnd, RouterLink} from '@angular/router';
import {AssetsService} from "../../services/assets.service";

@Component({
  selector: 'common-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;
  localTime: string = '';
  isLightMode = true;

  constructor(
    public assetsService: AssetsService,
    private router: Router
  ) {
  }

  toggleDarkTheme(): void {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  }

  public toggleMenu(): void {
    this.toggle = !this.toggle;
    const header: Element | null = document.querySelector('.header');

    if (header) {
      header.classList.toggle('active', this.toggle);
    } else {
      return;
    }
  }

  private updateTime(): void {
    setInterval(() => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Riga',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      this.localTime = new Intl.DateTimeFormat('en-GB', options).format(now);
    }, 1000);
  }

  ngOnInit(): void {
    this.updateTime();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.toggle = false;
      }
    });
  }
}
