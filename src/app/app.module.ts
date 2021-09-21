import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FreeTrialComponent } from './body/free-trial.component';
import { HelpPageComponent } from './body/help-page.component';
import { MemberPageComponent } from './body/member-page.component';
import { SearchPageComponent } from './body/search-page.component';
import { SignInPageComponent } from './body/signin-page.component';
import { TopBarComponent } from './header/topbar.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeComponent } from './prime/prime.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BannerComponent,
    LayoutMainComponent,
    SearchPageComponent,
    HelpPageComponent,
    SignInPageComponent,
    MemberPageComponent,
    FreeTrialComponent,
    PrimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
