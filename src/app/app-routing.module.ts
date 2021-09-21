import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { FreeTrialComponent } from './body/free-trial.component';
import { HelpPageComponent } from './body/help-page.component';
import { MemberPageComponent } from './body/member-page.component';
import { SearchPageComponent } from './body/search-page.component';
import { SignInPageComponent } from './body/signin-page.component';

const routes: Routes= [
  {path: 'home', component: BannerComponent},
  {path: 'free-trial', component: FreeTrialComponent},
  {path: 'help-page', component: HelpPageComponent},
  {path: 'member-page', component: MemberPageComponent},
  {path: 'search-page', component: SearchPageComponent},
  {path: 'signin-page', component: SignInPageComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule .forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
