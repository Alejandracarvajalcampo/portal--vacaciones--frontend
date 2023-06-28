import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeesComponent } from './register-employees/register-employees.component';

const routes: Routes = [
  {path: 'register-employees', component:RegisterEmployeesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
