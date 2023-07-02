import { Component, OnInit} from '@angular/core';
import { VacationRequest } from '../vacation-request';
import { VacationRequestService } from '../vacation-request.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  vacationRequests: VacationRequest [];


  constructor(
    private vacationRequestService : VacationRequestService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.getRequest();

    }


    private getRequest(){
      this.vacationRequestService.getRequestList().subscribe(dato => {
        this.vacationRequests = dato;
      });
    }

    deleteRequest(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la solicitud",
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
          this.vacationRequestService.deleteRequest(id).subscribe(dato => {
            console.log(dato);
            this.getRequest();
            swal(
              'Solicitud eliminada',
              'La solicitud ha sido eliminada con exito',
              'success'
            )
          })
        }
      })
    }

    detailsRequest(id: number){
    this.router.navigate(['details-request',id])
    }
  }


