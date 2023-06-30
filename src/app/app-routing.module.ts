import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { RegisterEmployeesComponent } from './register-employees/register-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';
import { ListRequestComponent } from './list-request/list-request.component';


const routes: Routes = [
  {path: 'vacationRequests', component:ListRequestComponent},
  {path: '',redirectTo:'vacationRequests',pathMatch:'full'},
  {path: 'employees', component:ListEmployeeComponent},
  {path: '',redirectTo:'employees',pathMatch:'full'},
  {path: 'register-employees', component:RegisterEmployeesComponent},
  {path: 'update-employee/:id', component:UpdateEmployeeComponent},
  {path: 'details-employee/:document', component:DetailsEmployeeComponent},
  {path: 'vacation-request', component:VacationRequestComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
