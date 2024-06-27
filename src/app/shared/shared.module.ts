import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { ActionCellRenderingComponent } from './cell-renderer/action-cell-rendering/action-cell-rendering.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ContentRenderingComponent } from './cell-renderer/content-rendering/content-rendering.component';
import { BackBtnComponent } from './back-btn/back-btn.component';



@NgModule({
  declarations: [
    DatatableComponent,
    ActionCellRenderingComponent,
    ContentRenderingComponent,
    BackBtnComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    AgGridModule
  ],
  exports:[
    DatatableComponent,
    BackBtnComponent
  ]
})
export class SharedModule { }
