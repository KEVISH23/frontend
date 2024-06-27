import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule),
    canActivate:[authGuard]
  },
  {
    path:'auth',
    component:AuthComponent,
    loadChildren:()=>import('./authorization/authorization.module').then(m=>m.AuthorizationModule),
    canActivate:[loginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
