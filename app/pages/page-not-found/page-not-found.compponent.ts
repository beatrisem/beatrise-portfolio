import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "../../reusable/buttons/button.component";

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent
  ],
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

}
