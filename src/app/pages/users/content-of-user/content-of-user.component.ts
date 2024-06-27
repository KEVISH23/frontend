import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { IUSERS } from 'src/app/core/interfaces/IUSERS';
import { AdminService } from 'src/app/core/services/admin.service';
import { ContentService } from 'src/app/core/services/content.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ActionCellRenderingComponent } from 'src/app/shared/cell-renderer/action-cell-rendering/action-cell-rendering.component';
import { ContentRenderingComponent } from 'src/app/shared/cell-renderer/content-rendering/content-rendering.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content-of-user',
  templateUrl: './content-of-user.component.html',
  styleUrls: ['./content-of-user.component.scss']
})
export class ContentOfUserComponent {
  @Input() userId!:string
  rowData!:IUSERS
  constructor(
    private adminService:AdminService,
    private toastr:ToastService,
    private router:Router,
    private contentService:ContentService
  ){}
  ngOnInit(){
    this.getContentOfUser()
  }
  getContentOfUser() {
    this.adminService.getContentOfParticularUser(this.userId).subscribe((response: any) => {
      if (response.status) {
        this.rowData = response.data
      }
    })
  }

  colDef: ColDef[] = [
    { field: 'title', flex: 1 },
    { field: 'description', flex: 1 },
    { headerName: 'Uploaded at', field: 'createdAt', flex: 1 },
    {
      headerName: 'Actions', cellRenderer: ActionCellRenderingComponent, cellRendererParams: {
        onEdit: (id: string) => this.editContent(id),
        onDelete: (id: string) => this.deleteContent(id),
        onView: (id: string) => this.viewContent(id)
      }, flex: 1
    },
    { headerName: 'Image', cellRenderer: ContentRenderingComponent, flex: 1 }
  ]

  editContent(id: string) {
    this.router.navigate([`/content/editContent/${id}`])
  }
  viewContent(id: string) {
    this.router.navigate([`/content/viewContent/${id}`])
  }
  deleteContent(id: string) {
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
        this.contentService.deleteContent(id).subscribe((response: IRESPONSE) => {
          if (response.status) {
            this.toastr.showSuccess(response.message)
            this.getContentOfUser()
          } else {
            this.toastr.showError(response.message)
          }
        },
          (error) => {
            this.toastr.showError(error.message)
          })
      }
    })
  }
}
