import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { isAdminGuard } from 'src/app/core/guards/is-admin.guard';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path:'profile',
    component:ProfileComponent,
  },
  {
    path:'viewAllUser',
    component:ViewAllUsersComponent,
    canActivate:[isAdminGuard]
  },
  {
    path:'editUser/:id',
    component:EditUserComponent,
    canActivate:[isAdminGuard]
  },
  {
    path:'viewUser/:id',
    component:ViewUserComponent,
    canActivate:[isAdminGuard]
  },
  {
    path:'',
    redirectTo:'profile',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
