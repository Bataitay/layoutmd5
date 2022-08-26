import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employees } from '../employees';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: '../templates/delete.component.html',
})
export class DeleteComponent implements OnInit {
  id:any;
  data:any;
  employeeForm !: FormGroup;
  constructor(
    private employeesService: EmployeeService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
  }
  getId(id: any){

    id = this.id
    console.log(this.id);
  }
  // getEmployeesDataId(){
  //   this.employeesService.getDataId(this.id).subscribe(res => {
  //     this.data = res;

  //   })
  //   console.log(this.employeesService.getEmployeeId);
  // }
  deleteEmployee(id:any) {
    this.employeesService.delete(id).subscribe(res => {
      // console.log(this.id);
      let ref = document.getElementById('canel')
      ref?.click()
    }
    );
}}
