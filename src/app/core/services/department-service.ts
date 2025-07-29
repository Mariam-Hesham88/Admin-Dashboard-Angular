import { Injectable } from '@angular/core';
import { IDepartment } from '../interfaces/idepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  private departments: IDepartment[] = [
    { id: 1, name: 'HR', description: 'Human Resources' },
    { id: 2, name: 'IT', description: 'Information Technology' },
    { id: 3, name: 'Finance', description: 'Financial Management and Accounting' },
    { id: 4, name: 'Marketing', description: 'Marketing and Advertising Department' },
    { id: 5, name: 'Operations', description: 'Operations and Logistics' }
  ];


  GetAll(): IDepartment[] {
    return [...this.departments];
  }

  GetById(id: number): IDepartment | null {
    const item = this.departments.find(d => d.id === id);
    return item ?? null;
  }

  Create(department: IDepartment): void {
    this.departments.push(department);
  }

  Update(id: number, updatedDepartment: IDepartment): void {
    const index = this.departments.findIndex(d => d.id == id);
    if (index !== -1) {
      this.departments[index] = updatedDepartment;
    }
  }

  Delete(id: number): void {
    this.departments = this.departments.filter(d => d.id !== id);
  }

}
