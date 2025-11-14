import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EmployeeDetails } from './employees/employee-details/employee-details';
import { EmployeeForm } from './employees/employee-form/employee-form';
import { EmployeeList } from './employees/employee-list/employee-list';
import { Main } from './dashboard/main/main';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employees', component: EmployeeList },
  { path: 'employees/add', component: EmployeeForm },
  { path: 'employees/:id', component: EmployeeDetails },
  { path: 'dashboard', component: Main },
];
