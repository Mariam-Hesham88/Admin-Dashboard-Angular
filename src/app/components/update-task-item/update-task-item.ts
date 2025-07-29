import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { TaskItemService } from '../../core/services/task-item-service';
import { ITaskItem } from '../../core/interfaces/itask-item';
// import { DepartmentService } from '../../core/services/department-service';
import { EmployeeService } from '../../core/services/employee-service';
import { IEmployee } from '../../core/interfaces/iemployee';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-task-item',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './update-task-item.html',
  styleUrl: './update-task-item.scss'
})
export class UpdateTaskItem {
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _TaskItemService = inject(TaskItemService)
  private readonly _Router = inject(Router)
  private readonly _EmployeeService = inject(EmployeeService)

  taskList: ITaskItem[] = []
  taskItemList: ITaskItem[] = [];
  employeeList: IEmployee[] = [];

  taskItemId:number = 0;

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
    this.taskItemList = this._TaskItemService.GetAll();
    this.employeeList = this._EmployeeService.GetAll();
  }

  ngOnInit(): void {
    this.loadData();
    this.taskItemId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    const data = this._TaskItemService.GetById(this.taskItemId);
    if(data){
      this.updateTaskItemForm.patchValue(data);
    }
  }

  UpdateTaskItem(): void {
    console.log("worked");
    this._TaskItemService.Update(this.taskItemId, this.updateTaskItemForm.value);
    this._Router.navigate(['/dashboard']);
    this.loadData();
  }
}
