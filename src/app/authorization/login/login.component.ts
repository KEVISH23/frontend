import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { IRESPONSEUSER, IUSERS } from 'src/app/core/interfaces/IUSERS';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TokenService } from 'src/app/core/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _tokenService: TokenService,
    private _router: Router,
    private toastr: ToastService
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitForm() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe((response: IRESPONSE) => {
        if (response.status) {
          this.toastr.showSuccess(response.message)
          this.loginForm.reset()
          const user = response.user as IRESPONSEUSER
          this._tokenService.addToken({ role: user.role, token: user.token, fullName: user.fullName })
          this._router.navigate(['/'])
        } else {
          this.toastr.showError(response.message)
        }
      },
        (error) => {
          this.toastr.showError(error.message)
        }
      )
    } else {
      Swal.fire({
        title: "Please fill the form correctly",
        icon: "error",
        timer: 2000
      });
    }
  }
}

