// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Utils
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Component
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartupListComponent } from './startup-list/startup-list.component';
import { ModificationPageComponent } from './modification-page/modification-page.component';
import { AddStartupComponent } from './add-startup/add-startup.component';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { ModifyConsultantComponent } from './modify-consultant/modify-consultant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MenuComponent,
    StartupListComponent,
    ModificationPageComponent,
    AddStartupComponent,
    ConsultantListComponent,
    AddConsultantComponent,
    ModifyConsultantComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate:[AuthGuard]
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'startups',
        component: StartupListComponent,
      },
      {
        path:'consultants',
        component:ConsultantListComponent
      },
      {
        path: 'consultant/add',
        component:AddConsultantComponent,
      },
      {
        path: 'consultant/:id',
        component:ModifyConsultantComponent,
      },
      {
        path: 'startup/add',
        component:AddStartupComponent,
      },
      {
        path: 'startup/:id',
        component: ModificationPageComponent,
      },
      
    ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
