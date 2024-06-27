import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup
  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private toastr:ToastService
  ) { }
  ngOnInit() {
    this.registerForm = this._fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['Admin', Validators.required],
      gender: ['', Validators.required],
    })
  }
  submitForm() {
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe((response:IRESPONSE) => {
        if (response.status) {
          this.toastr.showSuccess(response.message)
          this.registerForm.reset()
        } else {
          this.toastr.showError(response.message)
        }
      },
      (error)=>{
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
