import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { IRESPONSEUSER, IUSERS } from 'src/app/core/interfaces/IUSERS';
import { AdminService } from 'src/app/core/services/admin.service';
import { ToastService } from 'src/app/core/services/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  id!:string
  userDetails!:IRESPONSEUSER
  updateUserForm!: FormGroup
  constructor(
    private adminService:AdminService,
    private router:Router,
    private route:ActivatedRoute,
    private _fb: FormBuilder,
    private location:Location,
    private toastr:ToastService
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id') as string
    this.getUSerById(this.id)
    this.buildForm()
    this.updateUserForm.controls['email'].disable()
  }

  buildForm(){
    this.updateUserForm = this._fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required],
    })
  }

  getUSerById(id:string){
    this.adminService.getParticularUser(id).subscribe((response:IRESPONSE)=>{
      if(response.status){
        this.userDetails = response.data
        this.updateUserForm.patchValue(response.data)
      }
    })
  }

  submitForm(){
    if (this.updateUserForm.valid) {
      this.adminService.updateUserById(this.id,this.updateUserForm.value).subscribe((response:IRESPONSE) => {
        if (response.status) {
          console.log(response)
          this.toastr.showInfo(response.message)
          this.router.navigate(['/user/viewAllUser'])
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

  goBack(){
    this.location.back()
  }
}
