import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditContentComponent } from './add-edit-content/add-edit-content.component';
import { ViewYourContentComponent } from './view-your-content/view-your-content.component';
import { ViewParticularContentsComponent } from './view-particular-contents/view-particular-contents.component';
import { ViewAllContentsComponent } from './view-all-contents/view-all-contents.component';

const routes: Routes = [
  {
    path:'addContent',
    component:AddEditContentComponent
  },
  {
    path:'viewYourContent',
    component:ViewYourContentComponent
  },
  {
    path:'editContent/:id',
    component:AddEditContentComponent
  },
  {
    path:'viewContent/:id',
    component:ViewParticularContentsComponent
  },
  {
    path:'viewAllContent',
    component:ViewAllContentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }
