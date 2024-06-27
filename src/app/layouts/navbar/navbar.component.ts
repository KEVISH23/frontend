import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TokenService } from 'src/app/core/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() userName: string = "User"
  constructor(
    private _authService: AuthService,
    private _token: TokenService,
    private _router: Router,
    private toastr:ToastService
  ) { }
  logout() {
    this._authService.logout().subscribe((response: IRESPONSE) => {
      if (response.status) {
        this.toastr.showSuccess(response.message)
        this._token.removeToken()
        this._router.navigate(['/auth/login'])
      } else {
        this.toastr.showError(response.message)
      }
    },
      (error) => {
        this.toastr.showError(error.message)
      }
    )
  }
}
