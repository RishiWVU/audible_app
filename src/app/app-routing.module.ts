import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomePageComponent } from './body/home-page.component';
import { FreeTrialComponent } from './body/free-trial.component';
import { HelpPageComponent } from './body/help-page.component';
import { MemberPageComponent } from './body/member-page.component';
import { SearchPageComponent } from './body/search-page.component';
import { SignInPageComponent } from './body/signin-page.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes= [
  {path: 'home', component: HomePageComponent},
  {path: 'free-trial', component: FreeTrialComponent},
  {path: 'help-page', component: HelpPageComponent},
  {path: 'member-page', component: MemberPageComponent},
  {path: 'search-page', component: SearchPageComponent},
  {path: 'signin-page', component: SignInPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule .forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
