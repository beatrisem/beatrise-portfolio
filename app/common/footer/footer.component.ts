import {Component} from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from "@angular/router";
import {AssetsService} from "../../services/assets.service";

@Component({
  selector: 'common-footer',
  standalone: true,
  imports: [NgIf, FormsModule, NgStyle, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  localTime: string = '';

  constructor(
    public assetsService: AssetsService,
  ) {
  }

  // Local Time function
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
  }
}
