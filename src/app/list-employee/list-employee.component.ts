import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee [];


  constructor(
    private employeeService : EmployeeService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.getEmployee();

    }

    updateEmployee(id:number){
      this.router.navigate(['update-employee',id]);
    }

    private getEmployee(){
      this.employeeService.getEmployeeList().subscribe(dato => {
        this.employees = dato;
      });
    }

    deleteEmployee(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al empleado",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.employeeService.deleteEmployee(id).subscribe(dato => {
            console.log(dato);
            this.getEmployee();
            swal(
              'Empleado eliminado',
              'El empleado ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }

    detailsEmployee(document: number){
    this.router.navigate(['details-employee',document])
    }
  }

