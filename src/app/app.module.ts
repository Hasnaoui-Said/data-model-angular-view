import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MenuComponent} from './projet/menu/menu.component';
import {CategoriesComponent} from './projet/categories/categories.component';
import {CategorieListComponent} from './projet/categories/categorie-list/categorie-list.component';
import {FctEmailDataComponent} from './projet/email/fct-email-data/fct-email-data.component';
import {FctEmailDataDetailComponent} from './projet/email/fct-email-data-detail/fct-email-data-detail.component';
import {LoginComponent} from './projet/login/login.component';
import {CountryCreateComponent} from './projet/country/country-create/country-create.component';
import {CountryComponent} from './projet/country/country.component';
import {PrioritiesComponent} from './projet/priorities/priorities.component';
import {CountryListComponent} from './projet/country/country-list/country-list.component';
import {CategorieCreateComponent} from './projet/categories/categorie-create/categorie-create.component';
import {PrioritieListComponent} from './projet/priorities/prioritie-list/prioritie-list.component';
import {PrioritieCreateComponent} from './projet/priorities/prioritie-create/prioritie-create.component';
import {EmailComponent} from './projet/email/email.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, NgForm} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { FctEmailDataSearchComponent } from './projet/email/fct-email-data-search/fct-email-data-search.component';
import { DashboardComponent } from './projet/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriesComponent,
    CountryComponent,
    CategorieListComponent,
    CategorieCreateComponent,
    CountryListComponent,
    CountryCreateComponent,
    PrioritiesComponent,
    PrioritieListComponent,
    PrioritieCreateComponent,
    EmailComponent,
    FctEmailDataComponent,
    LoginComponent,
    FctEmailDataDetailComponent,
    FctEmailDataSearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


