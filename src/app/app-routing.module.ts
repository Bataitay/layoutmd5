import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddComponent } from './employee/add/add.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { EditComponent } from './employee/edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'add' , component: AddComponent},
  {path: 'index' , component: EmployeeComponent},
  {path: 'edit/:id' , component: EditComponent},
  {path: 'delete/:id' , component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
