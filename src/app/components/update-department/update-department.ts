import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDepartment } from '../../core/interfaces/idepartment';
import { DepartmentService } from '../../core/services/department-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-update-department',
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './update-department.html',
  styleUrl: './update-department.scss'
})
export class UpdateDepartment implements OnInit {

  private readonly _Router = inject(Router);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _DepartmentService = inject(DepartmentService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  departmentList: WritableSignal<IDepartment[]> = signal([]);
  departmentId: WritableSignal<number> = signal(0);

  updateDepartmentForm: FormGroup = this._FormBuilder.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', Validators.required],
  });

  loadData(): void {
    this.departmentList.set(this._DepartmentService.GetAll());
  }

  ngOnInit(): void {
    this.loadData();
    this.departmentId.set(Number(this._ActivatedRoute.snapshot.paramMap.get('id')));
    const data = this._DepartmentService.GetById(this.departmentId());
    if (data) {
      this.updateDepartmentForm.patchValue(data);
    }
  }

  UpdateDepartment(): void {
    console.log("worked");
    this._DepartmentService.Update(this.departmentId(), this.updateDepartmentForm.value);
    this._Router.navigate(['/department']);
    this.loadData();
  }

}
