import { Component, inject } from '@angular/core';
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
  searchValue: string = '';

  loadDepartments(): void {
    this.departmentList = this._DepartmentService.GetAll();
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  DeleteDepartment(id: number): void {
    this._DepartmentService.Delete(id);
    this.loadDepartments();
  }

}
