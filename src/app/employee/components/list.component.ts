import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

declare var window: any;
@Component({
  selector: 'app-list',
  templateUrl: '../templates/list.component.html',
})
export class ListComponent implements OnInit {
  employees: any[] = [];
  id: number = 0;
  delete: any;
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private _Router: Router,

  ) { }

  ngOnInit(): void {
    this.delete = new window.bootstrap.Modal(
      document.getElementById('deleteEmployee')
    )
    this.getAll();

  }

  getAll() {
    this.empService.index().subscribe(res => {
      this.employees = res;
    })
  }
  openDelete(id: any) {
    this.id = id;
    this.delete.show()
  }
  deleteEmployee() {
    this.empService.delete(this.id).subscribe(res => {
      this.employees = this.employees.filter(_ =>_.id !== this.id);
      this.delete.hide();
      // let ref = document.getElementById('canel')
      // ref?.click()
    })
  }
}

