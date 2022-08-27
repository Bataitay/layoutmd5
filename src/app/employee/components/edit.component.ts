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
  data: any;
  id: any;
  employees:any;
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
    const id =this.id;
    this.empService.update(
      this.editEmployeeForm.value, id ).subscribe(res => {
      this._Router.navigate(['index']);

    })
  }

}
