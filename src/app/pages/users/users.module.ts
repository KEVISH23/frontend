import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ContentOfUserComponent } from './content-of-user/content-of-user.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ViewAllUsersComponent,
    EditUserComponent,
    ViewUserComponent,
    ContentOfUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule { }
