import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { IContent } from 'src/app/core/interfaces/IContent';
import { ContentService } from 'src/app/core/services/content.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ActionCellRenderingComponent } from 'src/app/shared/cell-renderer/action-cell-rendering/action-cell-rendering.component';
import { ContentRenderingComponent } from 'src/app/shared/cell-renderer/content-rendering/content-rendering.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-contents',
  templateUrl: './view-all-contents.component.html',
  styleUrls: ['./view-all-contents.component.scss']
})
export class ViewAllContentsComponent {
  rowData!: IContent[]
  constructor(
    private contentService: ContentService,
    private router: Router,
    private toastr: ToastService
  ) { }
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
  ngOnInit() {
    this.getAllContents()
  }
  getAllContents() {
    this.contentService.getAllContents().subscribe((response: any) => {
      if (response.status) {
        this.rowData = response.data
      }
    })
  }
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
        this.contentService.deleteContent(id).subscribe((response: any) => {
          if (response.status) {
            this.toastr.showSuccess(response.message)
            this.getAllContents()
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
