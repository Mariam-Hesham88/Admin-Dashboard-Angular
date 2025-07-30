import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { TaskItemService } from '../../core/services/task-item-service';
import { ITaskItem } from '../../core/interfaces/itask-item';
// import { DepartmentService } from '../../core/services/department-service';
import { EmployeeService } from '../../core/services/employee-service';
import { IEmployee } from '../../core/interfaces/iemployee';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-update-task-item',
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './update-task-item.html',
  styleUrl: './update-task-item.scss'
})
export class UpdateTaskItem {
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _TaskItemService = inject(TaskItemService)
  private readonly _Router = inject(Router)
  private readonly _EmployeeService = inject(EmployeeService)

  taskItemList: WritableSignal<ITaskItem[]> = signal([]);
  employeeList: WritableSignal<IEmployee[]> = signal([]);

  taskItemId: WritableSignal<number> = signal(0);

  updateTaskItemForm: FormGroup = this._FormBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    priority: ['', Validators.required],
    status: ['', Validators.required],
    startDate: ['', Validators.required],
    deadLine: ['', Validators.required],
    assignedToId: ['', Validators.required]
  }, { validators: this.deadlineAfterStartDate }
  );

  deadlineAfterStartDate(group: AbstractControl): ValidationErrors | null {
    const startDate = group.get('startDate')?.value;
    const deadLine = group.get('deadLine')?.value;

    if (startDate && deadLine && new Date(deadLine) < new Date(startDate)) {
      return { deadlineBeforeStart: true };
    }
    return null;
  }

  loadData(): void {
    this.taskItemList.set(this._TaskItemService.GetAll());
    this.employeeList.set(this._EmployeeService.GetAll());
  }

  ngOnInit(): void {
    this.loadData();
    this.taskItemId.set(Number(this._ActivatedRoute.snapshot.paramMap.get('id')));
    const data = this._TaskItemService.GetById(this.taskItemId());
    if(data){
      this.updateTaskItemForm.patchValue(data);
    }
  }

  UpdateTaskItem(): void {
    console.log("worked");
    this._TaskItemService.Update(this.taskItemId(), this.updateTaskItemForm.value);
    this._Router.navigate(['/dashboard']);
    this.loadData();
  }
}
