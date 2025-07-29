import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { authGuard } from './core/gurds/auth-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/auth-layout/auth-layout').then(m => m.AuthLayout),
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'register',
                loadComponent: () => import('./components/register/register').then(m => m.Register)
            },
            {
                path: 'login',
                loadComponent: () => import('./components/login/login').then(m => m.Login)
            },
        ]
    },
    {
        path: '',
        canActivate:[authGuard],
        loadComponent: () => import('./layouts/blank-layout/blank-layout').then(m => m.BlankLayout),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'addEmployee',
                loadComponent: () => import('./components/add-employee/add-employee').then(m => m.AddEmployee)
            },
            {
                path: 'addDepartment',
                loadComponent: () => import('./components/add-department/add-department').then(m => m.AddDepartment)
            },
            {
                path: 'addTask',
                loadComponent: () => import('./components/add-task/add-task').then(m => m.AddTask)
            },
            {
                path: 'employee',
                loadComponent: () => import('./components/employee/employee').then(m => m.Employee)
            },
            {
                path: 'department',
                loadComponent: () => import('./components/department/department').then(m => m.Department)
            },
            {
                path: 'updateEmployee/:id',
                loadComponent: () => import('./components/update-employee/update-employee').then(m => m.UpdateEmployee)
            },
            {
                path: 'updateDepartment/:id',
                loadComponent: () => import('./components/update-department/update-department').then(m => m.UpdateDepartment)
            },
            {
                path: 'updateTask/:id',
                loadComponent: () => import('./components/update-task-item/update-task-item').then(m => m.UpdateTaskItem)
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound)
    }
];
