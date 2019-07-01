import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>AuthenticationModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
