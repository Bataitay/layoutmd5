import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from '../employees';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: '../templates/edit.component.html',
})
export class EditComponent implements OnInit {
  editEmployeeForm !: FormGroup;
  id: any;
  image: any;
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private _Router: Router,
    private toastrService: ToastrService,
    private fb: FormBuilder
    ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empService.getDataId(this.id).subscribe(res => {
      this.image = res.image;
      this.editEmployeeForm.patchValue({
        name: res.name,
        age: res.age,
        gender: res.gender,
        salary: res.salary,
      })
    })
    this.editEmployeeForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      salary: [''],
      image: [null],
    });
  }
  uploadImageEmployee(event: any){
    const file = event.target.files ? event.target.files[0] : '';
    this.editEmployeeForm.patchValue({
      image: file
    });
    this.editEmployeeForm.get('image')?.updateValueAndValidity();
    console.log(file);
  }
  updateEmployeesData(){
    const id = this.id;
    let employee: Employees = {
      name: this.editEmployeeForm.value.name,
      age: this.editEmployeeForm.value.age,
      gender: this.editEmployeeForm.value.gender,
      salary: this.editEmployeeForm.value.salary,
      image: this.editEmployeeForm.value.image,
    }
    this.empService.update(employee, +id ).subscribe(res => {
      console.log(res);
      // this.editEmployeeForm.reset();
      this._Router.navigate(['/employee']);
      if (res.status == true) {
        this.toastrService.success(JSON.stringify(res.message))
        }else{
          this.toastrService.error(JSON.stringify(res.message))
        }
    })
  }

}
