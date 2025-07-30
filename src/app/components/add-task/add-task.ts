import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskItemService } from '../../core/services/task-item-service';
import { ITaskItem } from '../../core/interfaces/itask-item';
import { EmployeeService } from '../../core/services/employee-service';
import { IEmployee } from '../../core/interfaces/iemployee';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask implements OnInit {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _TaskItemService = inject(TaskItemService);
  private readonly _EmployeeService = inject(EmployeeService);

  taskItemList: WritableSignal<ITaskItem[]> = signal([]);
  employeeList: WritableSignal<IEmployee[]> = signal([]);

  addTaskItemForm: FormGroup = this._FormBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    priority: ['', Validators.required],
    status: ['', Validators.required],
    startDate: ['', Validators.required],
    deadLine: ['', Validators.required],
    assignedTo: ['', Validators.required]
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

  loadTaskItem(): void {
    // this.taskItemList = this._TaskItemService.GetAll();
    // this.employeeList = this._EmployeeService.GetAll();
    this.taskItemList.set(this._TaskItemService.GetAll());
    this.employeeList.set(this._EmployeeService.GetAll());
  }

  ngOnInit(): void {
    this.loadTaskItem();
  }

  AddTaskItem(): void {
    if (this.addTaskItemForm.invalid) {
      alert("Please make sure the deadline is after the start date.");
    }
    else{
      this._TaskItemService.Create(this.addTaskItemForm.value);
      this.loadTaskItem();
      this.addTaskItemForm.reset();
    }
  }
}
