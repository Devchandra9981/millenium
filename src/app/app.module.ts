import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountRagisterComponent } from './components/account-ragister/account-ragister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AccountService } from './services/account.service';
import { AppLandingComponnent } from './components/landing/landing.component';
import { AppHomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountRagisterComponent,
    AppLandingComponnent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
