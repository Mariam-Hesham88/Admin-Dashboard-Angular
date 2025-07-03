import { Routes } from '@angular/router';
import { Login } from './components/login/login';

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
                path: 'AddTask',
                loadComponent: () => import('./components/add-task/add-task').then(m => m.AddTask)
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound)
    }
];
