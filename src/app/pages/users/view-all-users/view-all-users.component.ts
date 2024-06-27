import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { IUSERS } from 'src/app/core/interfaces/IUSERS';
import { AdminService } from 'src/app/core/services/admin.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { ActionCellRenderingComponent } from 'src/app/shared/cell-renderer/action-cell-rendering/action-cell-rendering.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.scss']
})
export class ViewAllUsersComponent {
  rowData!: IUSERS[]
  constructor(
    private adminService: AdminService,
    private router: Router,
    private toastr: ToastService
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe((response: IRESPONSE) => {
      if (response.status) {
        this.rowData = response.data
      }
    })
  }

  colDefs: ColDef[] = [
    { headerName: "ID", field: '_id', flex: 1 },
    { headerName: "Name", field: 'fullName', flex: 1 },
    { headerName: "Email", field: 'email', flex: 1 },
    { headerName: "Role", field: 'role', flex: 1 },
    { headerName: "registeredAt", field: 'createdAt', flex: 1 },
    {
      headerName: 'Actions', cellRenderer: ActionCellRenderingComponent, cellRendererParams: {
        onEdit: (id: string) => this.editContent(id),
        onDelete: (id: string) => this.deleteContent(id),
        onView: (id: string) => this.viewContent(id)
      }, flex: 1
    }
  ]

  editContent(id: string) {
    this.router.navigate([`/user/editUser/${id}`])
  }
  viewContent(id: string) {
    this.router.navigate([`/user/viewUser/${id}`])
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
        this.adminService.deleteUserById(id).subscribe((response: IRESPONSE) => {
          if (response.status) {
            this.toastr.showSuccess(response.message)
            this.getAllUsers()
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

