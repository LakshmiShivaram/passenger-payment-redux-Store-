import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PassengerSummaryService } from './passenger-summary.service';
import { SummaryComponent } from './summary/summary.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { passengerDetailsReducer } from './passengerStore/passengerDetails.reducer';
import { paymentDetailsReducer } from './paymentStore/paymentDetails.reducer';

const appRoutes: Routes = [
  { path: 'passengerDetails', component: PassengerDetailsComponent },
  { path: 'paymentDetails', component: PaymentDetailsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: 'passengerDetails', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      passengeDetails: passengerDetailsReducer,
      paymentDetails: paymentDetailsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PassengerDetailsComponent,
    PaymentDetailsComponent,
    SummaryComponent
  ],
  providers: [PassengerSummaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
