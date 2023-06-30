import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id:number;
  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.obtainEmployee(this.id).subscribe(dato =>{
      this.employee= dato;
    },error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/list']);
    Swal('Empleado actualizado', `El empleado ${this.employee.names} ha sido actualizado con éxito`, 'success');
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(dato => {
      this.goToEmployeeList();
    },error => console.log(error));
  }
}
