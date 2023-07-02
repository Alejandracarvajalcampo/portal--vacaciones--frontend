import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterEmployeesComponent } from './register-employees/register-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEmployeesComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    DetailsEmployeeComponent,
    ListRequestComponent,
    VacationRequestComponent,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
