import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { UserManagementModule } from './main/user-management/user-management.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => AuthModule
  },
  {
    path: 'user',
    loadChildren: () => UserManagementModule
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
