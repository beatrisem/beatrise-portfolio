import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() isActive: boolean = false;
}
