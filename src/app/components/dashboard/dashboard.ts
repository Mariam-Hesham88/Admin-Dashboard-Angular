import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskItemService } from '../../core/services/task-item-service';
import { ITaskItem } from '../../core/interfaces/itask-item';
import { FormsModule } from '@angular/forms';
import { SearchTaskItemPipe } from '../../core/pipes/search-task-item-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, FormsModule, SearchTaskItemPipe, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})


export class Dashboard implements OnInit {
  private readonly _TaskItemService = inject(TaskItemService);
  taskItemList: ITaskItem[] = [];
  SearchValue:string = "";

  loadTaskItem(): void {
    this.taskItemList = this._TaskItemService.GetAll();
  }

  ngOnInit(): void {
    this.loadTaskItem();
  }

  DeleteTaskItem(id:number):void{
    this._TaskItemService.Delete(id);
    this.loadTaskItem();
  }

}
