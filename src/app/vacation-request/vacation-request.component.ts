import { Component, OnInit } from '@angular/core';
import { VacationRequest } from '../vacation-request';
import { VacationRequestService } from '../vacation-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {
  vacationRequest: VacationRequest = new VacationRequest();
  errorMessage: string | null = null;

  constructor(
    private vacationRequestService: VacationRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveVacationRequest() {
    this.vacationRequestService
      .registerVacationRequest(this.vacationRequest)
      .subscribe(
        dato => {
          console.log(dato);
          this.goToVacationList();
        },
        error => {
          this.errorMessage = error.error;
        }
      );
  }

  goToVacationList() {
    this.router.navigate(['vacationRequests']);
  }

  onSubmit() {
    this.saveVacationRequest();
  }
}
