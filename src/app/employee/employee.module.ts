import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { AppRoutingModule } from '../app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
interface NgxSpinnerConfig {
  type?: string;
}

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    // BrowserAnimationsModule,
    FormsModule,
    EmployeesRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })


  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeModule { }
