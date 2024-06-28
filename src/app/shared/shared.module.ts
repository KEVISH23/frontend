import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { ActionCellRenderingComponent } from './cell-renderer/action-cell-rendering/action-cell-rendering.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ContentRenderingComponent } from './cell-renderer/content-rendering/content-rendering.component';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    DatatableComponent,
    ActionCellRenderingComponent,
    ContentRenderingComponent,
    BackBtnComponent,
    DisplayCountComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    AgGridModule,
    RouterModule,
    NgApexchartsModule
  ],
  exports:[
    DatatableComponent,
    BackBtnComponent,
    DisplayCountComponent,
    GraphComponent
  ]
})
export class SharedModule { }
