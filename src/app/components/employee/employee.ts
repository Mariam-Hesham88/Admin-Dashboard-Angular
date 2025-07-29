import { Component, inject, OnInit } from '@angular/core';
import { IEmployee } from '../../core/interfaces/iemployee';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../core/services/employee-service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search-pipe';

@Component({
  selector: 'app-employee',
  imports: [RouterLink, FormsModule, SearchPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})
export class Employee implements OnInit {
  private readonly _EmployeeService = inject(EmployeeService);
  employeeList: IEmployee[] = [];
  searchValue: string = '';

  loadEmployee():void{
    this.employeeList  = this._EmployeeService.GetAll();
  }

  ngOnInit(): void {
    this.loadEmployee();
  }

  DeleteEmployee(id:number):void{
    this._EmployeeService.Delete(id);
    this.loadEmployee();
    console.log("worked")
  }

}
