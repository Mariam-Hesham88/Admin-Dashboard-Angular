import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IDepartment } from '../../core/interfaces/idepartment';
import { DepartmentService } from '../../core/services/department-service';
import { FormsModule } from '@angular/forms';
import { SearchDepartmentPipe } from '../../core/pipes/search-department-pipe';

@Component({
  selector: 'app-department',
  imports: [RouterLink, FormsModule, SearchDepartmentPipe],
  templateUrl: './department.html',
  styleUrl: './department.scss'
})
export class Department {
  private readonly _DepartmentService = inject(DepartmentService);

  departmentList: IDepartment[] = [];
  searchValue: WritableSignal<string> = signal('');

  loadData(): void {
    this.departmentList = this._DepartmentService.GetAll();
    // this.departmentList.set(dept);
  }

  ngOnInit(): void {
    this.loadData();
  }

  DeleteDepartment(id: number): void {
    this._DepartmentService.Delete(id);
    this.loadData();
  }

}
