import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { SideBarComponent } from './main/side-bar/side-bar.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './employee/add/add.component';
import { EditComponent } from './employee/edit/edit.component';
import { DeleteComponent } from './employee/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    MainComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
