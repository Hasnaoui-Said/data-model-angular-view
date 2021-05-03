import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryComponent} from './projet/country/country.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PrioritiesComponent} from './projet/priorities/priorities.component';
import {CategoriesComponent} from './projet/categories/categories.component';
import {FctEmailDataComponent} from './projet/email/fct-email-data/fct-email-data.component';
import {LoginComponent} from './login/login.component';
import {FctEmailDataDetailComponent} from './projet/email/fct-email-data-detail/fct-email-data-detail.component';
import {MenuComponent} from './projet/menu/menu.component';
import {DashboardComponent} from './projet/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'country', component: CountryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prio', component: PrioritiesComponent},
  {path: 'data-mail', component: FctEmailDataComponent},
  {path: 'UniNfz', component: FctEmailDataComponent},
  {path: 'data-mail-detail', component: FctEmailDataDetailComponent},
  {path: 'cat', component: CategoriesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
