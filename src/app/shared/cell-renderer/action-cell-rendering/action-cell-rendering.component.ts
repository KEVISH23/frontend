import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-action-cell-rendering',
  templateUrl: './action-cell-rendering.component.html',
  styleUrls: ['./action-cell-rendering.component.scss']
})
export class ActionCellRenderingComponent implements ICellRendererAngularComp {
  params:any
  userRole!:string
  path!:boolean
  constructor(
    private token:TokenService,
    private route:ActivatedRoute
  ){}
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
    this.userRole = this.token.getRole() ?? ""
    this.path = this.route.snapshot.routeConfig?.path === "viewYourContent"
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }

  onEdit(){
    this.params.onEdit(this.params.data._id)
  }
  onDelete(){
    this.params.onDelete(this.params.data._id)
  }
  onView(){
    this.params.onView(this.params.data._id)
  }

}
