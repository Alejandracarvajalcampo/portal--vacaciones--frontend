import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employees',
  templateUrl: './register-employees.component.html',
  styleUrls: ['./register-employees.component.css']
})
export class RegisterEmployeesComponent implements OnInit{

  employee :Employee = new Employee();

  constructor(private employeeService:EmployeeService, private router:Router){

  }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.registerEmployee(this.employee).subscribe(dato =>{
      console.log(dato);
      this.goToEmployeeList();
    },error => console.log(error));
  }

  goToEmployeeList(){
  this.router.navigate(['employees']);
  }

  onSubmit(){
    this.saveEmployee();
  }

}
