import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AddComponent } from './components/add.component';
import { EditComponent } from './components/edit.component';
import { DeleteComponent } from './components/delete.component';
import { ListComponent } from './components/list.component';
import { ShowComponent } from './components/show.component';
import { EmployeesRoutingModule } from './employee-routing.module';




@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    EmployeesRoutingModule

  ]
})
export class EmployeeModule { }
