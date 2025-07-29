import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IDepartment } from './../../core/interfaces/idepartment';
import { DepartmentService } from '../../core/services/department-service';

@Component({
  selector: 'app-add-department',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-department.html',
  styleUrl: './add-department.scss'
})
export class AddDepartment {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _DepartmentService = inject(DepartmentService);

  departmentList:IDepartment[] = [];

  addDepartmentForm: FormGroup = this._FormBuilder.group({
  id: [null],
  name: ['', [Validators.required, Validators.minLength(2)]],
  description: ['', Validators.required],
});

  loadDepartments(): void {
    this.departmentList = this._DepartmentService.GetAll();
  }

  AddDepartment(): void {
    this._DepartmentService.Create(this.addDepartmentForm.value);
    // console.log('Added:', this.addDepartmentForm.value);
    this.loadDepartments();
    this.addDepartmentForm.reset();
  }

}
