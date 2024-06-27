import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContent } from 'src/app/core/interfaces/IContent';
import { ContentService } from 'src/app/core/services/content.service';

@Component({
  selector: 'app-view-particular-contents',
  templateUrl: './view-particular-contents.component.html',
  styleUrls: ['./view-particular-contents.component.scss']
})
export class ViewParticularContentsComponent {
  id!:string|null
  contentData!:IContent
  imageUrl:string = "http://localhost:3000"
  constructor(
    private _contentService: ContentService,
    private route: ActivatedRoute,
    private location:Location
  ){}
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this._contentService.getContentById(this.id).subscribe((response: any) => {
        if (response.status) {
          this.contentData = response.data
          this.imageUrl += response.data.contentPath
        }
      })
    }
  }
  goBack(){
    this.location.back()
  }
}
