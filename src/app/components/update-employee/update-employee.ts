import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee-service';
import { DepartmentService } from '../../core/services/department-service';
import { IEmployee } from '../../core/interfaces/iemployee';
import { IDepartment } from '../../core/interfaces/idepartment';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  imports: [ReactiveFormsModule, RouterLink,NgClass],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.scss'
})
export class UpdateEmployee {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _EmployeeService = inject(EmployeeService);
  private readonly _DepartmentService = inject(DepartmentService);
  private readonly _Router = inject(Router)
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  employeeList: WritableSignal<IEmployee[]> = signal([])
  departmentList: WritableSignal<IDepartment[]> = signal([])
  employeeId: WritableSignal<number> = signal(0);

  updateEmployeeForm: FormGroup = this._FormBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    jobTitle: ['', Validators.required],
    departmentId: ['', Validators.required],
    isActive: [true]
  });

  loadData(): void {
    this.employeeList.set(this._EmployeeService.GetAll());
    this.departmentList.set(this._DepartmentService.GetAll());
  }
  
  ngOnInit(): void {
    this.loadData();
    this.employeeId.set(Number(this._ActivatedRoute.snapshot.paramMap.get('id')));
    const data = this._EmployeeService.GetById(this.employeeId());
    if (data) {
      this.updateEmployeeForm.patchValue(data);
    }
  }

  UpdateEmployee(): void {
    console.log("worked");
    this._EmployeeService.Update(this.employeeId(), this.updateEmployeeForm.value);
    this._Router.navigate(['/employee']);
    this.loadData();
  }
}
