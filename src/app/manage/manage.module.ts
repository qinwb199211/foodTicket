import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './containers/manage.component';
import { ManageRoutingModule } from './manage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ManageRoutingModule, SharedModule, FormsModule],
  declarations: [ManageComponent],
})
export class ManageModule {}
