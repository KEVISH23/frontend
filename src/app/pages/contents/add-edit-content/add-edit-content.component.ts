import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';
import { ContentService } from 'src/app/core/services/content.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TokenService } from 'src/app/core/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-content',
  templateUrl: './add-edit-content.component.html',
  styleUrls: ['./add-edit-content.component.scss']
})
export class AddEditContentComponent {
  contentForm!: FormGroup
  id!: string
  file: any
  isFormEditable: boolean = false
  role!: string
  constructor(
    private _fb: FormBuilder,
    private _contentService: ContentService,
    private route: ActivatedRoute,
    private token: TokenService,
    private location: Location,
    private toastr: ToastService,
    private adminService:AdminService
  ) { }

  ngOnInit() {
    this.buildForm()
    this.id = this.route.snapshot.paramMap.get('id') as string
    if (this.id) {
      this.isFormEditable = true
      this._contentService.getContentById(this.id).subscribe((response: any) => {
        if (response.status) {
          this.contentForm.patchValue(response.data)
        }
      })
    }
    this.role = this.token.getRole() as string
  }

  fileChange(event: any) {
    this.file = event.target.files[0];
  }

  buildForm() {
    this.contentForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  submitForm() {
    // console.log(this.contentForm.value)
    if (this.contentForm.valid) {
      const formData: FormData = new FormData()
      formData.append('title', this.contentForm.value.title)
      formData.append('description', this.contentForm.value.description)
      formData.append('content', this.file)
      if (!this.isFormEditable) {
        this._contentService.addContent(formData).subscribe(
          (response: any) => {
            if (response.status) {
              this.toastr.showSuccess(response.message)
              this.contentForm.reset()
            } else {
              this.toastr.showError(response.message)
            }
          },
          (error) => {
            this.toastr.showError(error.message)
          }
        )
      } else {
        if (this.role === 'CC') {

          this._contentService.updateContentById(this.id, formData).subscribe(
            (response: any) => {
              if (response.status) {
                this.toastr.showInfo(response.message)
                this.location.back()
              } else {
                this.toastr.showError(response.message)
              }
            },
            (error) => {
              this.toastr.showError(error.message)
            }
          )
        }else{
          this.adminService.updateContent(this.id, formData).subscribe(
            (response: any) => {
              if (response.status) {
                this.toastr.showInfo(response.message)
                this.location.back()
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

    } else {
      Swal.fire({
        title: 'Fill the form Correctly',
        icon: "error",
        timer: 2000
      });
    }
  } goBack() {
    this.location.back()
  }
}
