import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employees } from '../employees';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: '../templates/add.component.html',
})
export class AddComponent implements OnInit {
  employeeForm !: FormGroup;
  data: any;
  // Employees=[];
  constructor(
    private empService: EmployeeService,
    private fb: FormBuilder,
    private _Router: Router,
    private toastrService: ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      salary: [''],
      image: [null],
    });
  }
  uploadImageEmployee(event: any) {
    const file = event.target.files ? event.target.files[0] : '';
    this.employeeForm.patchValue({
      image: file
    });
    this.employeeForm.get('image')?.updateValueAndValidity();
    console.log(file);
  }
  storeEmployeesData() {
    let employee: Employees = {
      name: this.employeeForm.value.name,
      age: this.employeeForm.value.age,
      gender: this.employeeForm.value.gender,
      salary: this.employeeForm.value.salary,
      image: this.employeeForm.value.image
    }
    this.empService.store(this.employeeForm.value.name,
      this.employeeForm.value.age,
      this.employeeForm.value.gender,
      this.employeeForm.value.salary,
      this.employeeForm.value.image).subscribe(res => {
        this.data = res;
        this.employeeForm.reset();
        this._Router.navigate(['index']);
        if (this.data.status == true) {
          this.toastrService.success(JSON.stringify(this.data.message), '', {
            timeOut: 2000,
            progressBar: true
          })
        }
      })
  }

}
