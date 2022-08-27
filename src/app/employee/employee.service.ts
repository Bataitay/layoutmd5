import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import {  Employees } from './employees';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
      console.log(formData);
    return this.http.post<Employees[]>(this.storeEmployee, formData).pipe(
      catchError(this.handleError)
    );
  }
  getDataId(id: any): Observable<any>{
    return this.http.get<Employees[]>(this.getEmployeeId +id).pipe(
      catchError(this.handleError)
    );
  }
  delete(id:any){
    return this.http.delete<Employees[]>(this.deleteEmployee +id).pipe(
      catchError(this.handleError)
    );
  }
  update(employee: Employees, id:any): Observable<any>{
      var formData = new FormData();
      formData.append('name', employee.name);
      formData.append('age', employee.age);
      formData.append('gender', employee.gender);
      formData.append('salary', employee.salary);
      formData.append('image', employee.image);
      console.log(formData);
    return this.http.put<Employees[]>(this.editEmployeeId + id, formData).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened. Please try again later.');
  }
}

