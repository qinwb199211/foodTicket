import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './services/login.service';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LoginRoutingModule, SharedModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
