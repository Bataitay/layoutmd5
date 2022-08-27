import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Employees } from './employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employees[]=[];
  id:any;
  getAllEmployees = 'http://127.0.0.1:8000/api/index';
  storeEmployee = 'http://127.0.0.1:8000/api/store';
  deleteEmployee = 'http://127.0.0.1:8000/api/delete/';
  getEmployeeId = 'http://127.0.0.1:8000/api/show/';
  editEmployeeId = 'http://127.0.0.1:8000/api/update/';
  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit(){

  }
  index() {
    return this.http.get<Employees[]>(this.getAllEmployees);
  }
  store( employee: Employees ): Observable<any>{
      var formData = new FormData();
      formData.append('name', employee.name);
      formData.append('age', employee.age);
      formData.append('gender', employee.gender);
      formData.append('salary', employee.salary);
      formData.append('image', employee.image);
    return this.http.post<Employees[]>(this.storeEmployee, formData);
  }
  getDataId(id: any): Observable<any>{
    return this.http.get<Employees[]>(this.getEmployeeId +id);
  }
  delete(id:any){
    return this.http.delete<Employees[]>(this.deleteEmployee +id);
  }
  update( employee: Employees, id:any): Observable<any>{
    return this.http.put<Employees[]>(this.editEmployeeId + id, employee);
  }
}

