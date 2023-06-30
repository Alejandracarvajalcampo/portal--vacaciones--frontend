import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit{
  document: number;
  employee:Employee

  constructor(
    private route:ActivatedRoute,
    private employeeService: EmployeeService){

  }
  ngOnInit(): void {
    this.document = this.route.snapshot.params['document'];
    this.employee = new Employee();
    this.employeeService.obtainEmployee(this.document).subscribe(dato => {
      this.employee = dato;
      swal(`detalles del empleado ${this.employee.names}`);
    });

  }

}
