import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ContentService } from 'src/app/core/services/content.service';

@Component({
  selector: 'app-content-rendering',
  templateUrl: './content-rendering.component.html',
  styleUrls: ['./content-rendering.component.scss']
})
export class ContentRenderingComponent implements ICellRendererAngularComp {
  params:any
  imageUrl ='http://localhost:3000'
  constructor(
    private contentService:ContentService
  ){}
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
    // this.contentService.getContentImage(this.params.data.contentPath).subscribe((response)=>{
    //   console.log(response)

    // })
    this.imageUrl += this.params.data.contentPath
    
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }
  
}
