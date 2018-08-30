import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/manage', pathMatch: 'full' },
  { path: 'manage', loadChildren: './manage/manage.module#ManageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
