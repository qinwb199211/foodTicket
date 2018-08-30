import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManageComponent } from './containers/manage.component';

const manageRoutes: Routes = [{ path: '', component: ManageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(manageRoutes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
