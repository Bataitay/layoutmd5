import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getAllEmployees = 'http://127.0.0.1:8000/api/index';
  // storeEmployee = 'http://127.0.0.1:8000/api/store';
  // deleteEmployee = 'http://127.0.0.1:8000/api/delete/';
  // getEmployeeId = 'http://127.0.0.1:8000/api/show/';
  // editEmployeeId = 'http://127.0.0.1:8000/api/update/';
  constructor(
    private http: HttpClient,
  ) { }
  index() {
    return this.http.get<Employee[]>(this.getAllEmployees);
  }
}
