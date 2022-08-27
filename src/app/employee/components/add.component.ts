import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employees } from '../employees';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService
  ) { }

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
    this.spinner.show();
    let employee: Employees = {
      name: this.employeeForm.value.name,
      age: this.employeeForm.value.age,
      gender: this.employeeForm.value.gender,
      salary: this.employeeForm.value.salary,
      image: this.employeeForm.value.image
    }
    this.empService.store(employee).subscribe(res => {
      this.employeeForm.reset();
      this._Router.navigate(['/employee']);
      if (res.status == true) {
        this.spinner.hide();
        this.toastrService.success(JSON.stringify(res.message))
      } else {
        this.toastrService.error(JSON.stringify(res.message))
      }
    })
  }

}
