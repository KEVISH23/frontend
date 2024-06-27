import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentsRoutingModule } from './contents-routing.module';
import { AddEditContentComponent } from './add-edit-content/add-edit-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewYourContentComponent } from './view-your-content/view-your-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewAllContentsComponent } from './view-all-contents/view-all-contents.component';
import { ViewParticularContentsComponent } from './view-particular-contents/view-particular-contents.component';


@NgModule({
  declarations: [
    AddEditContentComponent,
    ViewYourContentComponent,
    ViewAllContentsComponent,
    ViewParticularContentsComponent
  ],
  imports: [
    CommonModule,
    ContentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContentsModule { }
