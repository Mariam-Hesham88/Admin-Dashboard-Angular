import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../core/services/employee-service';
import { IEmployee } from '../../core/interfaces/iemployee';
import { IDepartment } from '../../core/interfaces/idepartment';
import { DepartmentService } from '../../core/services/department-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss'
})
export class AddEmployee implements OnInit{
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _EmployeeService = inject(EmployeeService);
  private readonly _DepartmentService = inject(DepartmentService);

  employeeList: IEmployee[] = []
  departmentList: IDepartment[] = []

  addEmployeeForm: FormGroup = this._FormBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    jobTitle: ['', Validators.required],
    departmentId: ['', Validators.required],
    isActive: [true]
  });

  loadData():void{
    this.employeeList  = this._EmployeeService.GetAll();
    this.departmentList  = this._DepartmentService.GetAll();
  }

  ngOnInit(): void {
    this.loadData();
  }

  AddEmployee(): void {
    this._EmployeeService.Create(this.addEmployeeForm.value);
    this.loadData();
    this.addEmployeeForm.reset();
  }
}
