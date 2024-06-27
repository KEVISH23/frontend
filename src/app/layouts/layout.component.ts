import { Component } from '@angular/core';
import { TokenService } from '../core/services/token.service';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  userName!: string
  constructor(
    private _token: TokenService,
  ) { }
  ngOnInit() {
    this.userName = this._token.getFullName() as string

  }
}
