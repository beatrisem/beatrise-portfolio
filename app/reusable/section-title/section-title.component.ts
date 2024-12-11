import {Component, Input} from '@angular/core';

@Component({
  selector: 'section-title',
  standalone: true,
  templateUrl: './section-title.component.html',
  imports: [],
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() title: string = '';
}
