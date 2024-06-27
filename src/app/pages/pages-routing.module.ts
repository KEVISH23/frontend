import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'user',
    loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)
  },
  {
    path:'content',
    loadChildren:()=>import('./contents/contents.module').then(m=>m.ContentsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
