import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent {
  @Output() onGoBack:EventEmitter<void> = new EventEmitter()
  goBack(){
    this.onGoBack.emit()
  }
}
