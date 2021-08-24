import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPaymentDetails } from '../common/paymentDetails';
import { PassengerSummaryService } from '../passenger-summary.service';
import { resetPassengerDetails } from '../passengerStore/passenger-details.actions';
import { resetPaymentDetails, setPaymentDetails } from '../paymentStore/paymentDetails.actions';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}

  paymentDetails: FormGroup;
  ngOnInit() {
    this.paymentDetails = this.fb.group({
      cardNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{16}$')]
      ],
      expirationDate: [
        '',
        [
          Validators.required,
          Validators.pattern('^(0[1-9]|10|11|12)/[0-9]{2}$')
        ]
      ],
      cva: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }

  continue(details) {
    alert('Confirmed.');
    let paymentDetails: IPaymentDetails = {
      cardNumber: details.cardNumber,
      expirationDate: details.expirationDate,
      cva: details.cva
    };
    this.store.dispatch(setPaymentDetails({ paymentDetails }));
  }

  reset() {
    this.store.dispatch(resetPaymentDetails());
  }
}
