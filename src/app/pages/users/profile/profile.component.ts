import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { IUSERS } from 'src/app/core/interfaces/IUSERS';
import { ToastService } from 'src/app/core/services/toast.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  wantToUpdate: boolean = false
  userData!: IUSERS
  profileForm!: FormGroup
  constructor(
    private _userService: UserService,
    private token: TokenService,
    private _fb: FormBuilder,
    private router: Router,
    private toastr: ToastService
  ) { }
  ngOnInit() {
    this.buildForm()
    this.getUserById()
    this.profileForm.disable()
    this.profileForm.controls['update'].enable()
  }
  getUserById() {
    this._userService.getUserById().subscribe((response: IRESPONSE) => {
      if (response.status) {
        this.userData = response.data
        this.profileForm.patchValue(response.data)
      }
    },
      (error) => {
        this.toastr.showError(error.message)
      }
    )
  }
  buildForm() {
    this.profileForm = this._fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      update: ['']
    })
  }
  submitForm() {
    if (this.profileForm.valid) {
      this.token.setName(this.profileForm.value.fullName)
      this._userService.updateUserById(this.profileForm.value).subscribe((response: IRESPONSE) => {
        if (response.status) {
          this.toastr.showSuccess(response.message)
          this.profileForm.reset()
          this.getUserById()
          this.wantToUpdate = false
          this.profileForm.disable()
          this.profileForm.controls['update'].enable()
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

  changeOptionForUpdate() {
    this.wantToUpdate = !this.wantToUpdate
    if (!this.wantToUpdate) {
      this.profileForm.disable()
      this.profileForm.controls['update'].enable()
    } else {
      this.profileForm.enable()
      this.profileForm.controls['password'].disable()
    }
  }

  deleteUser() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._userService.deleteUserById().subscribe((response) => {
          if (response.status) {
            this.toastr.showSuccess(response.message)
            this.router.navigate(['/auth/login'])
            this.token.removeToken()
          } else {
            this.toastr.showError(response.message)
          }
        },
          (error) => {
            this.toastr.showError(error.message)
          })

      }
    });
  }
}
