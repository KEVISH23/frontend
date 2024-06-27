import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
