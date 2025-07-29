import { Injectable } from '@angular/core';
import { IEmployee } from './../interfaces/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private employees: IEmployee[] = [
  {
    id: 1,
    fullName: 'Ahmed Ali',
    email: 'ahmed.ali@example.com',
    jobTitle: 'Backend Developer',
    isActive: true,
    departmentId: 2,
    department: {
      id: 2,
      name: 'IT',
      description: 'Information Technology'
    },
    tasks: [
      {
        id: 1,
        title: 'API Integration',
        description: 'Integrate payment gateway',
        priority: 'High',
        status: 'In Progress',
        startDate: new Date('2025-07-01'),
        deadLine: new Date('2025-07-25'),
        createdAt: new Date('2025-06-28'),
        assignedToId: 1,
        departmentId: 2
      }
    ]
  },
  {
    id: 2,
    fullName: 'Sara Mahmoud',
    email: 'sara.mahmoud@example.com',
    jobTitle: 'HR Manager',
    isActive: false,
    departmentId: 1,
    department: {
      id: 1,
      name: 'HR',
      description: 'Human Resources'
    },
    tasks: [
      {
        id: 2,
        title: 'Prepare Interviews',
        description: 'Schedule and prepare interview questions',
        priority: 'Medium',
        status: 'Not Started',
        startDate: new Date('2025-07-10'),
        deadLine: new Date('2025-07-20'),
        createdAt: new Date('2025-07-05'),
        assignedToId: 2,
        departmentId: 1
      }
    ]
  },
  {
    id: 3,
    fullName: 'Omar Hassan',
    email: 'omar.hassan@example.com',
    jobTitle: 'UI/UX Designer',
    isActive: true,
    departmentId: 2,
    department: {
      id: 2,
      name: 'IT',
      description: 'Information Technology'
    },
    tasks: [
      {
        id: 3,
        title: 'Redesign Dashboard',
        description: 'Create new UI for admin dashboard',
        priority: 'High',
        status: 'Completed',
        startDate: new Date('2025-06-01'),
        deadLine: new Date('2025-06-15'),
        createdAt: new Date('2025-05-25'),
        assignedToId: 3,
        departmentId: 2
      }
    ]
  },
  {
    id: 4,
    fullName: 'Nour El-Din',
    email: 'nour.eldin@example.com',
    jobTitle: 'Recruitment Specialist',
    isActive: true,
    departmentId: 1,
    department: {
      id: 1,
      name: 'HR',
      description: 'Human Resources'
    },
    tasks: [
      {
        id: 4,
        title: 'Post Job Ads',
        description: 'Publish new vacancies on job boards',
        priority: 'Low',
        status: 'In Progress',
        startDate: new Date('2025-07-15'),
        deadLine: new Date('2025-07-30'),
        createdAt: new Date('2025-07-10'),
        assignedToId: 4,
        departmentId: 1
      }
    ]
  },
  {
    id: 5,
    fullName: 'Layla Mostafa',
    email: 'layla.mostafa@example.com',
    jobTitle: 'QA Engineer',
    isActive: false,
    departmentId: 2,
    department: {
      id: 2,
      name: 'IT',
      description: 'Information Technology'
    },
    tasks: [
      {
        id: 5,
        title: 'Test New Features',
        description: 'Run manual and automated tests',
        priority: 'High',
        status: 'Not Started',
        startDate: new Date('2025-07-22'),
        deadLine: new Date('2025-08-05'),
        createdAt: new Date('2025-07-20'),
        assignedToId: 5,
        departmentId: 2
      }
    ]
  }
];



  GetAll():IEmployee[]{
    return [...this.employees];
  }

    GetById(id: number): IEmployee | null{
    const item = this.employees.find(e => e.id === id);
    return item ?? null;
  }

  Create(employee: IEmployee):void{
    this.employees.push(employee);
  }

  Update(id:number, updatedEmployee: IEmployee):void{
    const index = this.employees.findIndex(e => e.id == id);
    if(index !== -1){
      this.employees[index] = updatedEmployee;
    }
  }

  Delete(id:number):void{
    this.employees = this.employees.filter(e => e.id !== id);
  }

}
