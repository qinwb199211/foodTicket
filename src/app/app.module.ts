import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './login/services/auth-guard.service';
import { reducers } from './manage/reducers';
import { LoginService } from './login/services/login.service';
import { ManageEffect } from './manage/effects/manage.effect';
import { ManageService } from './manage/services/manage.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ManageEffect]),
    LoginModule,
  ],
  providers: [AuthGuard, LoginService, ManageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
