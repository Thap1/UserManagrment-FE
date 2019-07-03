import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { RegisterComponent } from './screens/register/register.component';
import { UsersComponent } from './screens/users/users.component';
import { EditComponent } from './screens/edit/edit.component';
import { UserManagementComponent } from './user-management.component';
import { NavbarModule } from 'src/app/share/layout/navbar/navbar.module';

@NgModule({
  declarations: [RegisterComponent, UsersComponent, EditComponent, UserManagementComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NavbarModule
  ]
})
export class UserManagementModule { }
