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
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCardComponent } from './carousel/carousel-card.component';
import { HttpClientModule } from '@angular/common/http'
import { UserInfoComponent } from './header/user-info.component';
import { EditCarouselComponent } from './body/edit-carousel.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';

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
    PrimeComponent,
    CarouselComponent,
    CarouselCardComponent,
    UserInfoComponent,
    EditCarouselComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'audible-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
