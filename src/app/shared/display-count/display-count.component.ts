import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.scss']
})
export class DisplayCountComponent {
  @Input() title!: string
  @Input() counts!: number
  @Input() navigaationUrl!: string
  @Input() navigationText!: string
}
