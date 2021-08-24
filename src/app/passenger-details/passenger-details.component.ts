import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PassengerSummaryService } from '../passenger-summary.service';
import {
  resetPassengerDetails,
  setPassengerDetails
} from '../passengerStore/passenger-details.actions';
import { IPassengerDetails } from '../sharedData/passengerDetails';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private summaryService: PassengerSummaryService,
    private route: Router,
    private store: Store<{ passengeDetails: IPassengerDetails }>
  ) {}
  passengerDetail: FormGroup;
  passenger$: Observable<any>;
  ngOnInit() {
    this.passengerDetail = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(12)]],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8,12}$')]]
    });

    this.store.select('passengeDetails').subscribe(res => {
      console.log(res);
    });
  }

  continue(details) {
    this.summaryService.summaryDetails = details;
    this.route.navigate(['/paymentDetails']);
  }

  save(details) {
    alert('Form Saved.');
    let passengerDetails: IPassengerDetails = {
      firstName: details.firstName,
      lastName: details.lastName,
      address: details.address,
      email: details.email,
      phone: details.phone
    };
    this.store.dispatch(setPassengerDetails({ passengerDetails }));
  }

  reset() {
    this.store.dispatch(resetPassengerDetails());
  }
}
